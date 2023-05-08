import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import AccountPage from './AccountPage';

const ProtectedRoute = () => {
  const { user } = UserAuth();

  return user ? <AccountPage /> : <Navigate to='/login' replace={true} />;
};

export default ProtectedRoute;
