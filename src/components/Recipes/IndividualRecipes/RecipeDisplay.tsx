import { Recipe } from '../../../types';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useNavigate } from 'react-router-dom';
import styles from '../Recipes.module.scss';
import { shortenString } from '../../../utils/common';

interface Props {
  recipe: Recipe;
}

const RecipeDisplay = ({ recipe }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/recipes/${recipe.id}`, { state: recipe });
  };

  const title = shortenString(recipe.title, 30);
  const credit = shortenString(recipe.creditsText, 30);

  return (
    <div onClick={handleClick} className={styles.recipeContainer}>
      <div className={styles.imageContainer}>
        <img
          src={recipe.image}
          alt={recipe.title}
          className={styles.recipeImg}
        />
      </div>
      <div className={styles.description}>
        <div className={styles.left}>
          <Typography variant='body2'>{title}</Typography>
          <Typography variant='subtitle1'>{credit}</Typography>
        </div>
        <div className={styles.right}>
          <FavoriteIcon fontSize='small' color='primary' />
          <Typography variant='body2'>{recipe.aggregateLikes}</Typography>
        </div>
      </div>
    </div>
  );
};

export default RecipeDisplay;
