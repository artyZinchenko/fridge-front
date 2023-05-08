import { Typography } from '@mui/material';
import { FlexStart } from '../styles/Global';
import { styled } from '@mui/material';

const Flex = styled(FlexStart)({
  flexWrap: 'nowrap',
});

const Greet = () => {
  const greet = () => {
    const current_time = new Date().getHours();
    if (current_time < 12) {
      return 1;
    } else if (current_time < 18) {
      return 2;
    } else {
      return 3;
    }
  };
  switch (greet()) {
    case 1:
      return (
        <Flex>
          <Typography variant='h1'>Good morning </Typography>
          <Typography variant='h3'>☕</Typography>
        </Flex>
      );
    case 2:
      return (
        <Flex>
          <Typography variant='h1'>Good afternoon </Typography>
          <Typography variant='h3'>☀</Typography>
        </Flex>
      );

    case 3:
      return (
        <Flex>
          <Typography variant='h1'>Good evening </Typography>
          <Typography variant='h3'>🌙</Typography>
        </Flex>
      );
    default:
      return (
        <Flex>
          <Typography variant='h1'>Hey there </Typography>
          <Typography variant='h3'>🙋‍♀️</Typography>
        </Flex>
      );
  }
};

export default Greet;
