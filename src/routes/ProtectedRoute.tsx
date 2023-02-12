import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import SignInModal from '../components/user-components/SignInModal';
import { UserAuth } from '../context/AuthContext';
import ModalContextProvider, { useModalContext } from '../context/ModalContext';
import AccountPage from './AccountPage';
import LoginPage from './LoginPage';

const ProtectedRoute = () => {
  const { user } = UserAuth();

  return user ? <AccountPage /> : <Navigate to='/login' replace={true} />;
};

export default ProtectedRoute;
