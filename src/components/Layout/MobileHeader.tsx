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
import { SmallLogo } from '../common/Logos';
import MenuIcon from '@mui/icons-material/Menu';
import Greet from '../common/Greet';
import React, { useState, useRef, useEffect } from 'react';
import { Modal, SwipeableDrawer } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';

const MobileHeader = () => {
  const { signInModalOpen, setSignInModalOpen } = useModalContext();
  const { mobileSidebarOpen, setMobileSidebarOpen } = useModalContext();

  return (
    <div style={{ paddingInline: '1em' }}>
      <FlexSpaceBetween>
        <SmallLogo />
        <MenuIcon
          onClick={() => setMobileSidebarOpen(true)}
          className='pointer'
        />
      </FlexSpaceBetween>
    </div>
  );
};

export default MobileHeader;
