import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AnotherOption = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search/ingredients');
  };

  return (
    <div className='py px gap'>
      <Typography>Find recipes you can make right now!</Typography>
      <Typography variant='body2'>
        {' '}
        A great tool for those who want to try new recipes without having to go
        to the grocery store or spend a lot of money on additional ingredients.{' '}
      </Typography>
      <Button variant='contained' onClick={handleClick}>
        Find pantry-ready recipes
      </Button>
    </div>
  );
};
export default AnotherOption;
