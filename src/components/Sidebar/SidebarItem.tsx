import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import {
  Box,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import MyLink from '../common/MyLink';
import { FlexStart } from '../styles/Global';
import { styled } from '@mui/material';

interface StyledProps {
  active: boolean;
}

const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'active',
})<StyledProps>(({ active }) => ({
  color: active ? '#111111' : '#555555',
  fontWeight: active ? '640' : '600',
}));
const StyledIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'active',
})<StyledProps>(({ theme, active }) => ({
  color: active ? theme.palette.primary.main : '#444444',
}));

interface Props {
  text: string;
  icon?: ReactJSXElement;
  to?: string;
  active?: boolean;
}

const SidebarItem = ({ text, icon, to, active }: Props) => {
  switch (!!to) {
    case true:
      if (!to) return null;
      return (
        <MyLink to={to}>
          <ListItemButton>
            <FlexStart>
              <ListItemIcon color='primary' sx={{ minWidth: '0px' }}>
                <StyledIcon active={active || false}>{icon}</StyledIcon>
              </ListItemIcon>

              <ListItemText>
                <StyledTypography variant='h4' active={active || false}>
                  {text}
                </StyledTypography>
              </ListItemText>
            </FlexStart>
          </ListItemButton>
        </MyLink>
      );
    case false:
      return (
        <ListItem>
          <ListItemText>
            <Typography variant='body2'>{text}</Typography>
          </ListItemText>
        </ListItem>
      );
    default:
      return null;
  }
};
export default SidebarItem;
