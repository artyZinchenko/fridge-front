import { useEffect } from 'react';
import SignInModal from '../components/User/SignInModal';
import { useModalContext } from '../context/ModalContext';

const LoginPage = () => {
  const { setSignInModalOpen } = useModalContext();

  // useEffect(() => setSignInModalOpen(true), []);

  return <SignInModal />;
};

export default LoginPage;
