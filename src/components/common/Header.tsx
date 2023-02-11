import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import styled from '@mui/system/styled';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { FlexEnd, FlexSpaceBetween } from '../styles/Global';
import { useNavigate } from 'react-router-dom';
import { useModalContext } from '../../context/ModalContext';

const StyledBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Header = () => {
  const { signInModalOpen, setSignInModalOpen } = useModalContext();

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledBar position='static'>
        <Toolbar sx={{ paddingLeft: 2, paddingRight: 0 }}>
          <FlexSpaceBetween>
            <IconButton
              size='large'
              edge='start'
              color='primary'
              aria-label='menu'
              sx={{ mr: 1 }}
              onClick={() => navigate('/')}
            >
              Logo
            </IconButton>
            <FlexEnd>
              <IconButton
                size='large'
                edge='start'
                color='default'
                aria-label='menu'
                sx={{ mr: 1 }}
                onClick={() => navigate('/recipes')}
              >
                <MenuBookIcon />
              </IconButton>
              <IconButton
                size='large'
                edge='start'
                color='default'
                aria-label='menu'
                sx={{ mr: 1 }}
                onClick={() => navigate('/search')}
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                size='large'
                edge='start'
                color='default'
                aria-label='menu'
                sx={{ mr: 1 }}
                onClick={() => {
                  setSignInModalOpen(true);
                }}
              >
                <AccountCircleOutlinedIcon />
              </IconButton>
            </FlexEnd>
          </FlexSpaceBetween>
        </Toolbar>
      </StyledBar>
    </Box>
  );
};

export default Header;
