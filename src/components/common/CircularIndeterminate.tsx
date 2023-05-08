import { Box, CircularProgress } from '@mui/material';

const CircularIndeterminate = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress color='primary' />
    </Box>
  );
};

export default CircularIndeterminate;
