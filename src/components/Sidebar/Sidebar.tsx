import { useEffect, useMemo } from 'react';
import List from '@mui/material/List';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { CenterChildElement } from '../styles/Global';
import SidebarItem from './SidebarItem';
import { ExpandedLogo } from '../common/Logos';
import { useLocation } from 'react-router-dom';
import { useModalContext } from '../../context/ModalContext';
import UserGroup from '../common/UserGroup';
import Footer from './Footer';
import './Sidebar.css';

const SidebarContent = () => {
  const { pathname } = useLocation();
  const { setSignInModalOpen } = useModalContext();

  useEffect(() => {
    setSignInModalOpen(false);
  }, [pathname]);

  const activePage = useMemo(() => {
    const pathnameArr = pathname.split('/');
    if (pathnameArr[1] === 'recipes' && pathnameArr[2]) return 'recipes';
    switch (pathname) {
      case '/search/ingredients':
        return 'search-ingredients';
      case '/search/filter':
        return 'search-filter';
      case '/saved-recipes':
        return 'saved';
      case '/recipes':
        return 'recipes';
      case '/':
        return 'home';
      default:
        return 'home';
    }
  }, [pathname]);

  return (
    <div className='sidebar-flex'>
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          height: '100%',
        }}
        component='nav'
      >
        <CenterChildElement sx={{ paddingBottom: '1em' }}>
          <ExpandedLogo />
        </CenterChildElement>
        <UserGroup />
        <SidebarItem
          icon={<HomeRoundedIcon />}
          text='Home'
          to='/'
          active={activePage === 'home'}
        />
        <SidebarItem
          icon={<SearchRoundedIcon />}
          text='Browse recipes'
          to='/recipes'
          active={activePage === 'recipes'}
        />
        <SidebarItem
          icon={<MenuBookRoundedIcon />}
          text='Saved recipes'
          to='/saved-recipes'
          active={activePage === 'saved'}
        />
        <SidebarItem text='MoreTools' />
        <SidebarItem
          icon={<KitchenIcon />}
          text='Pantry ready'
          to='/search/ingredients'
          active={activePage === 'search-ingredients'}
        />
        <SidebarItem
          icon={<FilterAltRoundedIcon />}
          text='Filter'
          to='/search/filter'
          active={activePage === 'search-filter'}
        />
      </List>
      <Footer />
    </div>
  );
};

export default SidebarContent;
