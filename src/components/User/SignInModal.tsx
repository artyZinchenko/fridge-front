import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import GoogleButton from 'react-google-button';
import { useModalContext } from '../../context/ModalContext';
import { FlexVertical } from '../styles/Global';
import { UserAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ExpandedLogo } from '../common/Logos';
import LinearProgress from '@mui/material/LinearProgress';

const style = {
  width: '100vw',
  height: '100vh',
  bgcolor: 'background.paper',
};

const SignInModal = () => {
  const { resolvingUser } = UserAuth();
  const { signInModalOpen, setSignInModalOpen } = useModalContext();
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    user && setSignInModalOpen(false);
  });

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
          {resolvingUser && <LinearProgress color='primary' />}
          <FlexVertical>
            <FlexVertical sx={{ gap: '2em', paddingTop: '2em' }}>
              <ExpandedLogo />
              <Typography variant='h6'>Your recipes are waiting</Typography>
              <Typography variant='subtitle2'>
                Connect for better experience
              </Typography>
              <GoogleButton onClick={handleClick} disabled={resolvingUser} />
            </FlexVertical>
            <Box
              className='pointer'
              onClick={() => {
                navigate('/');
                setSignInModalOpen(false);
              }}
              sx={{ paddingTop: '2em' }}
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
