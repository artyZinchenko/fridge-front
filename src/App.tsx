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
import { useQueryClient } from '@tanstack/react-query/build/lib/QueryClientProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { AuthContextProvider } from './context/AuthContext';
import ModalContextProvider from './context/ModalContext';
import SignInModal from './components/common/SignInModal';

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
  const queryClient = new QueryClient();

  return (
    <div>
      <AuthContextProvider>
        <ModalContextProvider>
          <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
              {inputGlobalStyle}
              <ReactQueryDevtools initialIsOpen={false} />
              <AppContainer>
                <SignInModal />
                <RouterProvider router={router} />
              </AppContainer>
            </ThemeProvider>
          </QueryClientProvider>
        </ModalContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;
