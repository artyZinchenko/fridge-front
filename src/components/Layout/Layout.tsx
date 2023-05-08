import Header from './MobileHeader';
import useMediaQuery from '@mui/material/useMediaQuery';
import SidebarContent from '../Sidebar/Sidebar';
import './Layout.css';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Backdrop, styled, SwipeableDrawer } from '@mui/material';
import WidescreenHeader from '../Homepage/WidescreenTop';
import MobileHeader from './MobileHeader';
import { useModalContext } from '../../context/ModalContext';

const Drawer = styled(SwipeableDrawer)({
  width: '100vw',
  '& ..css-i9fmh8-MuiBackdrop-root-MuiModal-backdrop': {
    width: '100vw',
  },
});

const AppContainer = styled(Container)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
  margin: '0',
  padding: '0',
}));

const Layout = () => {
  const { mobileSidebarOpen, setMobileSidebarOpen } = useModalContext();

  const matches = useMediaQuery('(min-width:40em)');
  if (matches) {
    return (
      <div className='widescreen grid'>
        <div className='leftColumn'>
          <div className='sidebar'>
            <SidebarContent />
          </div>
        </div>
        <div className='container'>
          <Outlet />
        </div>
      </div>
    );
  } else {
    return (
      <div className='mobile'>
        <MobileHeader />
        <Outlet />
        <Drawer
          anchor='right'
          open={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
          onOpen={() => setMobileSidebarOpen(true)}
          disableScrollLock
        >
          <SidebarContent />
        </Drawer>
      </div>
    );
  }
};
export default Layout;
