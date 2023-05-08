import { Box, CircularProgress } from '@mui/material';

//TODO: make a circle appear with delay

const CircularIndeterminate = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color='primary' />
    </Box>
  );
};

export default CircularIndeterminate;
