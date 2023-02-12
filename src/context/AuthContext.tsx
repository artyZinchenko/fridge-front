/* eslint-disable @typescript-eslint/no-empty-function */
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
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

interface AuthContextValue {
  user: User | null;
  googleSignIn: () => void;
  logOut: () => void;
}

export const AuthContext = createContext<AuthContextValue>({
  user: null,
  googleSignIn: () => {},
  logOut: () => {},
});

export const AuthContextProvider = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const { signInModalOpen, setSignInModalOpen } = useModalContext();
  console.log('auth provider');

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithRedirect(auth, provider);
  };

  const logOut = async () => {
    const auth = getAuth(app);

    try {
      await signOut(auth);
      setUser(null);
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUser(user);
        console.log('OnAuthStateChange User: ', user);
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
        console.log('redirect result');
        result?.user && setUser(result.user);
        setSignInModalOpen(false);
        navigate('/');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      <Outlet />
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
