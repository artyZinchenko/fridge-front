import RecipeQuery from '../../RecipeQuery/RecipeQuery';
import styles from '../Recipes.module.scss';
import RecipesPage from './RecipesPage';

const RecipePageLayout = () => {
  return (
    <div className={styles.page}>
      <div className={styles.searchContainer}>
        <RecipeQuery />
      </div>
      <RecipesPage />
    </div>
  );
};
export default RecipePageLayout;
