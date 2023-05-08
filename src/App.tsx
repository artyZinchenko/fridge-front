import GlobalStyles from './components/styles/Global';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from 'react-router-dom';
import ErrorPage from './routes/ErrorPage';
import RecipesPage from './components/Recipes/SearchpageRecipes/RecipesPage';
import Header from './components/Layout/MobileHeader';
import theme from './components/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import Homepage from './components/Homepage/Homepage';
import { Container, styled } from '@mui/material';

import SearchPage from './routes/SearchPage';
import DetailedRecipe from './components/Recipes/DetailedRecipe/DetailedRecipe';
import { useQueryClient } from '@tanstack/react-query/build/lib/QueryClientProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css';
import { AuthContextProvider } from './context/AuthContext';
import ModalContextProvider from './context/ModalContext';
import SignInModal from './components/User/SignInModal';
import AccountPage from './routes/AccountPage';
import ProtectedRoute from './routes/ProtectedRoute';
import LoginPage from './routes/LoginPage';
import Layout from './components/Layout/Layout';
import RecipesPageLayout from './components/Recipes/SearchpageRecipes/RecipesPageLayout';
import SavedRecipes from './components/User/SavedRecipes';
import { ShopContextProvider } from './context/ShopContext';
import IngredSearch from './components/search-components/ingreds-search/IngredSearch';
import TypeSearch from './components/search-components/types-search/TypeSearch';
import NotFound from './components/common/NotFound/NotFound';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    element: <AuthContextProvider />,
    errorElement: <NotFound />,
    children: [
      {
        element: <ShopContextProvider />,
        children: [
          {
            element: <Layout />,
            children: [
              {
                path: '/',
                element: <Homepage />,
              },
              {
                path: 'recipes',
                element: <RecipesPageLayout />,
              },
              {
                path: 'recipes/:id',
                element: <DetailedRecipe />,
              },
              {
                path: 'search',
                element: <SearchPage />,
                children: [
                  { path: 'ingredients', element: <IngredSearch /> },
                  { path: 'filter', element: <TypeSearch /> },
                ],
              },
              {
                path: 'login',
                element: <LoginPage />,
              },
              {
                path: 'account',
                element: <ProtectedRoute />,
              },
              {
                path: 'saved-recipes',
                element: <SavedRecipes />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const App = () => {
  const inputGlobalStyle = <GlobalStyles />;
  const queryClient = new QueryClient();

  return (
    <div style={{ width: '100%', overflow: 'hidden' }}>
      <ModalContextProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            {inputGlobalStyle}
            <RouterProvider router={router} />
          </ThemeProvider>
        </QueryClientProvider>
      </ModalContextProvider>
    </div>
  );
};

export default App;
