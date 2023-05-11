import GlobalStyles from './components/styles/Global';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import theme from './components/styles/theme';
import { ThemeProvider } from '@mui/material/styles';
import Homepage from './components/Homepage/Homepage';
import SearchPage from './routes/SearchPage';
import DetailedRecipe from './components/Recipes/DetailedRecipe/DetailedRecipe';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import 'firebaseui/dist/firebaseui.css';
import { AuthContextProvider } from './context/AuthContext';
import ModalContextProvider from './context/ModalContext';
import Layout from './components/Layout/Layout';
import RecipesPageLayout from './components/Recipes/SearchpageRecipes/RecipesPageLayout';
import SavedRecipes from './components/User/SavedRecipes';
import { ShopContextProvider } from './context/ShopContext';
import IngredSearch from './components/search-components/ingreds-search/IngredSearch';
import TypeSearch from './components/search-components/types-search/TypeSearch';
import NotFound from './components/common/NotFound/NotFound';

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
