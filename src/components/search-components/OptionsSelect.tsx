import { Typography, Box } from '@mui/material';
import { FlexSpaceBetween, FlexStart } from '../styles/Global';
import { styled } from '@mui/material';
import KitchenIcon from '@mui/icons-material/Kitchen';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface StyledProps {
  searchByIngreds: boolean;
}

const SearchByIngreds = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'searchByIngreds',
})<StyledProps>(({ searchByIngreds, theme }) => ({
  color: searchByIngreds
    ? theme.palette.text.primary
    : theme.palette.text.secondary,
  paddingInline: '1em',
  width: '100%',
  paddingBlock: '0.5em',
  backgroundColor: searchByIngreds
    ? theme.palette.background.paper
    : theme.palette.background.default,
}));

const SearchByTypes = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'searchByIngreds',
})<StyledProps>(({ searchByIngreds, theme }) => ({
  color: searchByIngreds
    ? theme.palette.text.secondary
    : theme.palette.text.primary,
  paddingInline: '1em',
  width: '100%',
  height: '100%',
  paddingBlock: '0.5em',
  backgroundColor: searchByIngreds
    ? theme.palette.background.default
    : theme.palette.background.paper,
}));

const OptionsSelect = () => {
  const { pathname } = useLocation();
  const [pathIngreds, setPathIngreds] = useState(true);

  useEffect(() => {
    if (pathname.includes('filter')) {
      setPathIngreds(false);
    } else {
      setPathIngreds(true);
    }
  }, [pathname]);

  return (
    <FlexSpaceBetween>
      <SearchByIngreds searchByIngreds={pathIngreds}>
        <Link to='./ingredients'>
          <FlexStart className='pointer'>
            <KitchenIcon
              fontSize='inherit'
              color={pathIngreds ? 'primary' : 'action'}
            />
            <Typography color={pathIngreds ? '#333333' : '#666666'}>
              Ingredients
            </Typography>
          </FlexStart>
        </Link>
      </SearchByIngreds>
      <SearchByTypes searchByIngreds={pathIngreds}>
        <Link to='./filter'>
          <FlexStart className='pointer'>
            <FilterAltIcon
              fontSize='inherit'
              color={pathIngreds ? 'action' : 'primary'}
            />
            <Typography color={pathIngreds ? '#666666' : '#333333'}>
              Filters
            </Typography>
          </FlexStart>
        </Link>
      </SearchByTypes>
    </FlexSpaceBetween>
  );
};

export default OptionsSelect;
