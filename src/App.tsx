import GlobalStyles from './components/styles/Global';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page';
import RecipesPage from './routes/RecipesPage';
import Header from './components/common/Header';
import theme from './components/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import Homepage from './routes/Homepage';
import { Container, styled } from '@mui/material';
import { ModalOpenProvider } from './state/state';
import SearchPage from './routes/SearchPage';
import RecievedRecipes from './components/recipe-components/RecievedRecipes';
import DetailedRecipe from './components/recipe-components/DetailedRecipe';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'recipes',
    element: <RecipesPage />,
  },
  {
    path: 'recipes/:id',
    element: <DetailedRecipe />,
  },
  {
    path: 'search',
    element: <SearchPage />,
  },
]);

const AppContainer = styled(Container)(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.default,
  margin: '0',
  padding: '0',
}));

const App = () => {
  const inputGlobalStyle = <GlobalStyles />;

  return (
    <div>
      <ThemeProvider theme={theme}>
        {inputGlobalStyle}
        <ModalOpenProvider>
          <AppContainer>
            <RouterProvider router={router} />
          </AppContainer>
        </ModalOpenProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
