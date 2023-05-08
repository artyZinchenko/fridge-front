import { ReactNode, useEffect, useState } from 'react';
import Card from './Card';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import { styled } from '@mui/material';
import CarouselDots from './CarouselDots';
import { motion, AnimatePresence } from 'framer-motion';
import carouselData from '../../../data/carouselData';
import styles from './Carousel.module.scss';

interface Props {
  children: ReactNode;
}

const Rail = ({ children }: Props) => {
  return <div className={styles.rail}>{children}</div>;
};

const Carousel = () => {
  const [[page, direction], setPage] = useState<number[]>([0, 0]);

  const paginate = (newDirection: number) => {
    const newPage = page + newDirection;

    if (newPage < 0) {
      setPage([carouselData.length - 1, newDirection]);
      return;
    }

    if (newPage >= carouselData.length) {
      setPage([0, newDirection]);
      return;
    }

    setPage([newPage, newDirection]);
  };

  return (
    <div className={`${styles.railContainer} py white-bg shadow`}>
      <Rail>
        <AnimatePresence>
          <Card direction={direction} page={page} paginate={paginate} />
        </AnimatePresence>
      </Rail>
      <CarouselDots paginate={paginate} page={page} />
    </div>
  );
};

export default Carousel;
