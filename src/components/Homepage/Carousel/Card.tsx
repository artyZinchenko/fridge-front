import { CardContent, Typography, CardActions, Button } from '@mui/material';
import CardMedia from '@mui/material/CardMedia/CardMedia';
import { styled } from '@mui/material';
import { FlexVertical } from '../../styles/Global';
import carouselData from '../../../data/carouselData';
import { motion } from 'framer-motion';
import styles from './Carousel.module.scss';
import { useNavigate } from 'react-router-dom';
import { useModalContext } from '../../../context/ModalContext';
import { UserAuth } from '../../../context/AuthContext';

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface Props {
  direction: number;
  page: number;
  paginate: (newDirection: number) => void;
}

const Card = ({ direction, page, paginate }: Props) => {
  const navigate = useNavigate();
  const { user } = UserAuth();

  // const paginate = (newDirection: number) => {
  //   const nextStep = activeStep + newDirection;
  //   if (nextStep === carouselData.length) setActiveStep(0);
  //   else if (nextStep < 0) setActiveStep(carouselData.length - 1);
  //   else setActiveStep(nextStep);
  // };

  const { img, title, fn } = carouselData[page];

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const image = require(`../../../assets/${img}.webp`);

  const { setSignInModalOpen } = useModalContext();

  const handleClick = () => {
    if (fn.type === 'redirect') {
      fn.searchByIngreds
        ? navigate(`/search/ingredients`)
        : navigate(`/search/filter`);
    } else {
      setSignInModalOpen(true);
    }
  };

  const displayCondition = !!(fn.type === 'register' && user);

  return (
    <motion.div
      key={page}
      style={{ width: '100%' }}
      initial={direction > 0 ? { x: 300, opacity: 0 } : { x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={direction > 0 ? { x: -300, opacity: 0 } : { x: 300, opacity: 0 }}
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 1 },
      }}
      drag='x'
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={1}
      onDragEnd={(e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);
        if (swipe < -swipeConfidenceThreshold) {
          paginate(1);
        } else if (swipe > swipeConfidenceThreshold) {
          paginate(-1);
        }
      }}
    >
      <div className={styles.cardLayout}>
        <div className={styles.imageContainer}>
          <img src={image} />
        </div>
        <div className='px'>
          <FlexVertical className='gap'>
            <div className=''>
              <Typography variant='body2' color='text.secondary'>
                {title}
              </Typography>
            </div>
            {!displayCondition && (
              <Button
                variant='contained'
                size='small'
                onClick={handleClick}
                sx={{ marginBottom: '0.3em' }}
              >
                {fn.title}
              </Button>
            )}
          </FlexVertical>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
