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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setSignInModalOpen: () => {},
};

interface ModalContextValues {
  signInModalOpen: boolean;
  setSignInModalOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<ModalContextValues>(initialData);

interface Props {
  children: ReactNode;
}

const ModalContextProvider = ({ children }: Props) => {
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  console.log('SignInModal state: ', signInModalOpen);

  return (
    <ModalContext.Provider value={{ signInModalOpen, setSignInModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);

export default ModalContextProvider;
