import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';
import { FlexSpaceBetween } from '../styles/Global';

interface StyledProps {
  metric: boolean;
}

const StyledMetric = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'metric',
})<StyledProps>(({ theme, metric }) => ({
  color: metric ? theme.palette.primary.main : theme.palette.grey[500],
  textAlign: 'center',
}));
const StyledUS = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'metric',
})<StyledProps>(({ theme, metric }) => ({
  color: metric ? theme.palette.grey[500] : theme.palette.primary.main,
  textAlign: 'center',
}));

interface Props {
  metric: boolean;
  setMetric: (arg0: boolean) => void;
}

const MeasurmentOptions = ({ metric, setMetric }: Props) => {
  return (
    <FlexSpaceBetween>
      <Box>
        <StyledMetric
          variant='subtitle1'
          metric={metric}
          onClick={() => setMetric(true)}
        >
          Metric
        </StyledMetric>
      </Box>
      <Box sx={{ borderRight: '1px solid lightgray', height: '2em' }}></Box>
      <Box>
        <StyledUS
          variant='subtitle1'
          metric={metric}
          onClick={() => setMetric(false)}
        >
          US
        </StyledUS>
      </Box>
    </FlexSpaceBetween>
  );
};

export default MeasurmentOptions;
