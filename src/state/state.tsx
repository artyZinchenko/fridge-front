import { createContext, ReactNode, useState } from 'react';

interface Props {
  children: ReactNode;
}

interface ModalOpenContextValue {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalOpenContext = createContext<ModalOpenContextValue>({
  modalOpen: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setModalOpen: () => {},
});

export const ModalOpenProvider = ({ children }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <ModalOpenContext.Provider value={{ modalOpen, setModalOpen }}>
      {children}
    </ModalOpenContext.Provider>
  );
};
