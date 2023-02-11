/* eslint-disable @typescript-eslint/no-empty-function */
import {
  useContext,
  createContext,
  ReactNode,
  useState,
  SetStateAction,
  useEffect,
} from 'react';
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  User,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';
import { app } from '../firebase-config';

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

interface Props {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);

  console.log(user);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        console.log('redirect result');
        result?.user && setUser(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const logOut = () => {
    const auth = getAuth(app);
    signOut(auth);
  };

  useEffect(() => {
    const auth = getAuth(app);

    getRedirectResult(auth)
      .then((result) => {
        console.log('redirect result');
        result?.user && setUser(result.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
