import { UserAuth } from '../../context/AuthContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';

const Avatar = () => {
  const { user } = UserAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/saved-recipes');
  };

  return (
    <div>
      {user?.photoURL ? (
        <img
          src={user?.photoURL}
          alt='User Avatar'
          className='user-img pointer'
          onClick={handleClick}
          referrerPolicy='no-referrer'
        />
      ) : (
        <AccountCircleIcon
          fontSize='large'
          color='disabled'
          className='user-img pointer'
          onClick={handleClick}
        />
      )}
    </div>
  );
};
export default Avatar;
