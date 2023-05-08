import styles from './Common.module.scss';
import { Skeleton, useMediaQuery } from '@mui/material';

const SkeletonRecipe = () => {
  const matches = useMediaQuery('(min-width:30em)');

  return (
    <div>
      <div className={styles.imageContainer}>
        <Skeleton
          animation='wave'
          variant='rounded'
          sx={
            matches
              ? { width: '11em', height: '9em' }
              : { width: '16em', height: '11em' }
          }
        />
      </div>
      <div className={styles.description}>
        <div className={styles.left}>
          <Skeleton animation='wave' variant='text' width='7em' />
          <Skeleton animation='wave' variant='text' width='4em' />
        </div>
        <div className={styles.right}>
          <Skeleton animation='wave' variant='text' width='1em' />
          <Skeleton animation='wave' variant='text' width='1em' />
        </div>
      </div>
    </div>
  );
};
export default SkeletonRecipe;
