import { useState } from 'react';
import { FlexSpaceBetween, FlexVertical, FlexStart } from '../styles/Global';
import { Recipe } from '../../types';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import { AccordionSummary, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Divider } from '@mui/material';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Icons from './Icons';

// const CircularIndeterminate = () => {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         margin: '10px',
//       }}
//     >
//       <CircularProgress />
//     </Box>
//   );
// };
const StyledBox = styled(Box)({
  padding: '0 0.7em 1em 0.7em',
});

interface Props {
  recipe: Recipe;
}

const RecipeDisplay = ({ recipe }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('click', `/recipes/${recipe.id}`);
    // navigate(`/recipes/${recipe.id}`, { replace: true });
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <StyledBox onClick={handleClick}>
      <FlexVertical>
        <Box sx={{ position: 'relative' }}>
          <img src={recipe.image} alt={recipe.title} />
          <Icons recipe={recipe} />
        </Box>
        <FlexSpaceBetween>
          <FlexVertical>
            <Typography variant='body2'>{recipe.title}</Typography>
            <Typography variant='subtitle1'>{recipe.creditsText}</Typography>
          </FlexVertical>
          <FlexVertical
            sx={{
              alignItems: 'flex-start',
              paddingTop: '0.7em',
            }}
          >
            <FlexStart>
              <AccessTimeIcon fontSize='small' />
              <Typography variant='body2'>
                {recipe.readyInMinutes} min
              </Typography>
            </FlexStart>
            <FlexStart>
              <FavoriteIcon fontSize='small' color='primary' />
              <Typography variant='body2'>{recipe.aggregateLikes}</Typography>
            </FlexStart>
          </FlexVertical>
        </FlexSpaceBetween>
      </FlexVertical>
    </StyledBox>
  );
};

export default RecipeDisplay;
