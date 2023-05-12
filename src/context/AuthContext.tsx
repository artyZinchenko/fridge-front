/* eslint-disable @typescript-eslint/no-empty-function */
import { useContext, createContext, useState, useEffect } from 'react';
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  User,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { app } from '../firebase-config';
import { Outlet, useNavigate } from 'react-router-dom';
import { useModalContext } from './ModalContext';
import { useQueryClient } from '@tanstack/react-query';

interface AuthContextValue {
  user: User | null;
  googleSignIn: () => void;
  logOut: () => void;
  token: string;
  resolvingUser: boolean;
  setResolvingUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  googleSignIn: () => {},
  logOut: () => {},
  token: '',
  resolvingUser: false,
  setResolvingUser: () => {},
});

export const AuthContextProvider = () => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState('');
  const [resolvingUser, setResolvingUser] = useState(true);

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { setSignInModalOpen } = useModalContext();

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    setResolvingUser(true);
    signInWithRedirect(auth, provider);
  };

  const logOut = async () => {
    const auth = getAuth(app);

    try {
      await signOut(auth);
      setUser(null);
      setToken('');
      queryClient.removeQueries({ queryKey: ['user-data'], exact: true });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, async (user: User | null) => {
      if (user) {
        setUser(user);
        try {
          const token = await user.getIdToken();
          setToken(token);
        } catch (e) {
          console.log(e);
        }
        setResolvingUser(false);
      }
    });
    return () => {
      unsubscribe();
    };
  });

  useEffect(() => {
    const auth = getAuth(app);

    getRedirectResult(auth)
      .then((result) => {
        setResolvingUser(false);
        result?.user && setUser(result.user);
        setSignInModalOpen(false);
        console.log('redirect result: ', result?.user.displayName);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log('redirect error');
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        googleSignIn,
        logOut,
        token,
        resolvingUser,
        setResolvingUser,
      }}
    >
      <Outlet />
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
