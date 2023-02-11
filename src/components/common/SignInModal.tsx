import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GoogleButton from 'react-google-button';
import { useModalContext } from '../../context/ModalContext';
import { Container } from '@mui/system';
import { FlexVertical } from '../styles/Global';
import { IconButton } from '@mui/material';
import { UserAuth } from '../../context/AuthContext';

const style = {
  width: '100vw',
  height: '100vh',
  bgcolor: 'background.paper',
};

const SignInModal = () => {
  const { signInModalOpen, setSignInModalOpen } = useModalContext();
  const { googleSignIn, user } = UserAuth();

  console.log('User: ', user);

  const handleClick = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        open={signInModalOpen}
        onClose={() => setSignInModalOpen(false)}
        aria-labelledby='modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <FlexVertical
            sx={{
              justifyContent: 'space-between',
              height: '100vh',
              padding: 0,
            }}
          >
            <FlexVertical sx={{ gap: '2em' }}>
              <IconButton
                size='large'
                edge='start'
                color='primary'
                aria-label='menu'
                sx={{ mb: 2 }}
              >
                Logo
              </IconButton>
              <Typography variant='h6'>Your recipes are waiting</Typography>
              <Typography variant='subtitle2'>
                Connect for better experience
              </Typography>
              <GoogleButton onClick={handleClick} />
            </FlexVertical>
            <Box
              sx={{ alignSelf: 'flex-end' }}
              onClick={() => setSignInModalOpen(false)}
            >
              <Typography variant='body1'>CLOSE</Typography>
            </Box>
          </FlexVertical>
        </Box>
      </Modal>
    </div>
  );
};

export default SignInModal;
