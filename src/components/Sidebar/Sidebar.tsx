import { useEffect, useMemo, useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FilterAltRoundedIcon from '@mui/icons-material/FilterAltRounded';
import StarBorder from '@mui/icons-material/StarBorder';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Avatar, Button, Divider, ListItem, Typography } from '@mui/material';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import { CenterChildElement, FlexStart, FlexVertical } from '../styles/Global';
import SidebarItem from './SidebarItem';
import { UserAuth } from '../../context/AuthContext';
import { ExpandedLogo } from '../common/Logos';
import { useLocation } from 'react-router-dom';
import { useModalContext } from '../../context/ModalContext';
import UserGroup from '../common/UserGroup';
import Footer from './Footer';
import './Sidebar.css';
import { includes } from 'lodash';

const SidebarContent = () => {
  const { user, logOut, googleSignIn } = UserAuth();
  const { pathname } = useLocation();
  const { signInModalOpen, setSignInModalOpen } = useModalContext();

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
