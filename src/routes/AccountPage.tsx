import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const AccountPage = () => {
  const { logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    navigate('/');
  };

  return (
    <div>
      <div>AccountPage</div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};
export default AccountPage;
