import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FlexVertical } from '../styles/Global';
import { Divider, Stack } from '@mui/material';
import { styled } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import './MenuStack.css';
import MyLink from '../common/MyLink';
import { useModalContext } from '../../context/ModalContext';

const StyledAccordion = styled(Accordion)({
  border: 0,
  boxShadow: 'none',
  '&::before': {
    display: 'none',
  },
});

const MenuStack = () => {
  const { pathname } = useLocation();
  const { searchByIngreds, setSearchByIngreds } = useModalContext();

  const activePage = useMemo(() => {
    if (pathname.includes('/recipes')) return 'recipes';
    else if (pathname.includes('search')) return 'search';
    else if (pathname.includes('saved-recipes')) return 'saved';
    else if (pathname.length === 1) return 'home';
    return undefined;
  }, [pathname]);

  const complexSearchClass = useMemo(() => {
    return activePage === 'search' && searchByIngreds ? 'active' : 'non-active';
  }, [activePage, searchByIngreds]);

  const pantryReadyClass = useMemo(() => {
    return activePage === 'search' && !searchByIngreds
      ? 'active'
      : 'non-active';
  }, [activePage, searchByIngreds]);

  return (
    <Stack
      direction='column'
      divider={<Divider orientation='horizontal' flexItem />}
      spacing={1}
      className='stack'
    >
      <div className={activePage === 'home' ? 'active' : 'non-active'}>
        <AccordionSummary sx={{ padding: 0 }}>
          <MyLink to='/'>
            <Typography sx={{ paddingInline: 1 }}>Home</Typography>
          </MyLink>
        </AccordionSummary>
      </div>
      <div className={activePage === 'recipes' ? 'active' : 'non-active'}>
        <AccordionSummary sx={{ padding: 0 }}>
          <MyLink to='/recipes'>
            <Typography sx={{ paddingInline: 1 }}>Browse Recipes</Typography>
          </MyLink>
        </AccordionSummary>
      </div>

      <StyledAccordion disableGutters={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 0 }}>
          <Typography sx={{ paddingInline: 1.3 }}>More Tools</Typography>
        </AccordionSummary>

        <AccordionDetails sx={{ padding: 0 }}>
          <FlexVertical
            sx={{
              padding: 0,
              paddingBlock: 1,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <div
              className={complexSearchClass}
              style={{ width: '100%', paddingInline: 8 }}
            >
              <MyLink to='/search' handleClick={() => setSearchByIngreds(true)}>
                <Typography variant='body2'>Pantry ready</Typography>
              </MyLink>
            </div>
            <div
              className={pantryReadyClass}
              style={{ width: '100%', paddingInline: 8 }}
            >
              <MyLink
                to='/search'
                handleClick={() => setSearchByIngreds(false)}
              >
                <Typography variant='body2'>Complex search</Typography>
              </MyLink>
            </div>
          </FlexVertical>
        </AccordionDetails>
      </StyledAccordion>
      <div className={activePage === 'saved' ? 'active' : 'non-active'}>
        <AccordionSummary sx={{ padding: 0 }}>
          <MyLink to='/saved-recipes'>
            <Typography sx={{ paddingInline: 1 }}>Saved Recipes</Typography>
          </MyLink>
        </AccordionSummary>
      </div>
    </Stack>
  );
};

export default MenuStack;
