import { Box, Button, Divider, Paper, styled, Typography } from '@mui/material';
import IngredList from '../components/search-components/ingreds-search/IngredList';
import { FlexSpaceBetween } from '../components/styles/Global';
import { useAppSelector } from '../hooks';
import { resetSelected } from '../reducers/ingredSlice';
import { useAppDispatch } from '../hooks';
import { useEffect, useState } from 'react';
import SearchOptions from '../components/search-components/OptionsSelect';
import SearchByIngredsComponent from '../components/search-components/ingreds-search/IngredSearch';
import SearchByTypesComponent from '../components/search-components/types-search/TypeSearch';
import Layout from '../components/Layout/Layout';
import ContainerIngredSearch from '../components/search-components/ingreds-search/IngredSearch';
import IngredSearch from '../components/search-components/ingreds-search/IngredSearch';
import OptionsSelect from '../components/search-components/OptionsSelect';
import { useModalContext } from '../context/ModalContext';
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
  const { searchByIngreds } = useModalContext();
  useSetTitle();

  return (
    <StyledPaper>
      <StyledBox>
        <OptionsSelect />
        <PantryIngredientsContextProvider>
          <Outlet />
        </PantryIngredientsContextProvider>
        {/* {searchByIngreds ? (
            <IngredSearch />
        ) : (
          <SearchByTypesComponent />
        )} */}
      </StyledBox>
    </StyledPaper>
  );
};

export default SearchPage;
