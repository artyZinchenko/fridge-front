import { Box, Typography } from '@mui/material';
import { Recipe } from '../../../../types';
import { FlexStart } from '../../../styles/Global';
import styles from '../DetailedRecipe.module.scss';

interface Props {
  recipe: Recipe;
}

interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <Box className={styles.recipeTag}>
      <Typography variant='body1'>{tag}</Typography>
    </Box>
  );
};

const RecipeTags = ({ recipe }: Props) => {
  if (
    !recipe.cheap &&
    !recipe.dairyFree &&
    !recipe.glutenFree &&
    !recipe.vegan &&
    recipe.cuisines.length < 1
  ) {
    return null;
  }

  return (
    <div>
      <Typography variant='h6'>Recipe Tags</Typography>
      <FlexStart>
        {recipe.cheap && <Tag tag='Cheap' />}
        {recipe.dairyFree && <Tag tag='Dairy-free' />}
        {recipe.glutenFree && <Tag tag='Gluten-free' />}
        {recipe.vegan && <Tag tag='Vegan' />}
        {recipe.cuisines.map((cuisine) => (
          <Tag tag={cuisine} key={cuisine} />
        ))}
      </FlexStart>
    </div>
  );
};
export default RecipeTags;
