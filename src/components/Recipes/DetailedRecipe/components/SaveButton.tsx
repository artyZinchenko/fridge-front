import { Button, Skeleton, Typography } from '@mui/material';

interface Props {
  saved: boolean;
  saveRecipe: () => Promise<void>;
  enabled: boolean;
  loggedIn: boolean;
}

const SaveButton = ({ saved, saveRecipe, enabled, loggedIn }: Props) => {
  if (!enabled) {
    return (
      <Skeleton animation='wave' variant='text' width='7em' height='2em' />
    );
  }
  if (!loggedIn) {
    return (
      <Button variant='outlined' onClick={saveRecipe}>
        Sign in to save
      </Button>
    );
  }
  if (saved) {
    return <Typography>Added to collection!</Typography>;
  }
  if (!saved) {
    return (
      <Button variant='outlined' onClick={saveRecipe}>
        Save Recipe
      </Button>
    );
  }

  return null;
};

export default SaveButton;
