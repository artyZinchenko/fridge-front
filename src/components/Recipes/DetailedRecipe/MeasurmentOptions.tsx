import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';
import styles from './DetailedRecipe.module.scss';

interface StyledProps {
  metric: boolean;
}

const StyledMetric = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'metric',
})<StyledProps>(({ theme, metric }) => ({
  color: metric ? theme.palette.primary.main : theme.palette.grey[500],
  textAlign: 'center',
  cursor: 'pointer',
}));
const StyledUS = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'metric',
})<StyledProps>(({ theme, metric }) => ({
  color: metric ? theme.palette.grey[500] : theme.palette.primary.main,
  textAlign: 'center',
  cursor: 'pointer',
}));

interface Props {
  metric: boolean;
  setMetric: (arg0: boolean) => void;
}

const MeasurmentOptions = ({ metric, setMetric }: Props) => {
  return (
    <div className={styles.measurements}>
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
    </div>
  );
};

export default MeasurmentOptions;
