import { Button, Skeleton } from '@mui/material';
import { UserAuth } from '../../context/AuthContext';
import { FlexVertical } from '../styles/Global';
import Avatar from './Avatar';

const UserGroup = () => {
  const { user, googleSignIn, logOut, resolvingUser } = UserAuth();

  if (resolvingUser)
    return (
      <FlexVertical sx={{ paddingBottom: '1em', maxHeight: '5.5em' }}>
        <Skeleton
          variant='circular'
          sx={{ width: '3rem', height: '3rem' }}
          animation='wave'
        />
        <Skeleton variant='text' width={90} height={60} animation='wave' />
      </FlexVertical>
    );
  if (user)
    return (
      <FlexVertical sx={{ paddingBottom: '1em' }}>
        <Avatar />
        <Button
          variant='contained'
          onClick={() => logOut()}
          sx={{ fontSize: '0.8em' }}
        >
          Logout
        </Button>
      </FlexVertical>
    );
  if (!user)
    return (
      <FlexVertical sx={{ paddingBottom: '1em' }}>
        <Button
          variant='contained'
          onClick={() => googleSignIn()}
          sx={{ fontSize: '0.8em' }}
        >
          Sign Up/Log In
        </Button>
      </FlexVertical>
    );
  return null;
};

export default UserGroup;
