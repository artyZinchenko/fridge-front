import { useEffect } from 'react';
import SignInModal from '../components/user-components/SignInModal';
import { useModalContext } from '../context/ModalContext';

const LoginPage = () => {
  const { setSignInModalOpen } = useModalContext();

  useEffect(() => setSignInModalOpen(true), []);

  return <SignInModal />;
};

export default LoginPage;
