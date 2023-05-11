/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
  useContext,
} from 'react';

const initialData = {
  signInModalOpen: false,
  setSignInModalOpen: () => {},
  mobileSidebarOpen: false,
  setMobileSidebarOpen: () => {},
  searchByIngreds: true,
  setSearchByIngreds: () => {},
  recipeSearchOpen: false,
  setRecipeSeacrhOpen: () => {},
};

interface ModalContextValues {
  signInModalOpen: boolean;
  setSignInModalOpen: Dispatch<SetStateAction<boolean>>;
  mobileSidebarOpen: boolean;
  setMobileSidebarOpen: Dispatch<SetStateAction<boolean>>;
  searchByIngreds: boolean;
  setSearchByIngreds: Dispatch<SetStateAction<boolean>>;
  recipeSearchOpen: boolean;
  setRecipeSeacrhOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextValues>(initialData);

interface Props {
  children: ReactNode;
}

const ModalContextProvider = ({ children }: Props) => {
  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [searchByIngreds, setSearchByIngreds] = useState(true);
  const [recipeSearchOpen, setRecipeSeacrhOpen] = useState(false);
  console.log('sign in modal', signInModalOpen);

  return (
    <ModalContext.Provider
      value={{
        signInModalOpen,
        setSignInModalOpen,
        mobileSidebarOpen,
        setMobileSidebarOpen,
        searchByIngreds,
        setSearchByIngreds,
        recipeSearchOpen,
        setRecipeSeacrhOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);

export default ModalContextProvider;
