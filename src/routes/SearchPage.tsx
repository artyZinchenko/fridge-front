import { Box, Paper, styled } from '@mui/material';
import OptionsSelect from '../components/search-components/OptionsSelect';
import { PantryIngredientsContextProvider } from '../context/PantryIngredientsContext';
import { Outlet } from 'react-router-dom';
import { useSetTitle } from '../components/hooks/useSetTitle';

const StyledPaper = styled(Paper)({
  margin: '0.6em',
  borderRadius: '1em',
});

const StyledBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
});

const SearchPage = () => {
  useSetTitle();

  return (
    <StyledPaper>
      <StyledBox>
        <OptionsSelect />
        <PantryIngredientsContextProvider>
          <Outlet />
        </PantryIngredientsContextProvider>
      </StyledBox>
    </StyledPaper>
  );
};

export default SearchPage;
