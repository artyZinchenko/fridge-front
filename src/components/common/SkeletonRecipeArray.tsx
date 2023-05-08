import { useMediaQuery } from '@mui/material';
import { Fragment } from 'react';
import SkeletonRecipe from './SkeletonRecipe';

const SkeletonRecipeArray = () => {
  const matches = useMediaQuery('(min-width:30em)');

  const iterableSkeleton = Array.from({ length: matches ? 4 : 1 }, (_, i) => {
    return <SkeletonRecipe key={i} />;
  });

  return <Fragment>{iterableSkeleton}</Fragment>;
};

export default SkeletonRecipeArray;
