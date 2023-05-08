import CircleIcon from '@mui/icons-material/Circle';
import carouselData from '../../../data/carouselData';
import { styled } from '@mui/material';
import styles from './Carousel.module.scss';

const SmallerDot = styled(CircleIcon)({
  fontSize: '0.7em',
});

interface Props {
  paginate: (newDirection: number) => void;
  page: number;
}

const CarouselDots = ({ paginate, page }: Props) => {
  const handleClick = (id: number) => {
    if (page === id) return;
    paginate(id - page);
  };

  return (
    <div className={styles.dots}>
      {carouselData.map((el) => {
        return (
          <SmallerDot
            className={styles.dot}
            color={page === el.id ? 'primary' : 'disabled'}
            key={el.title}
            onClick={() => handleClick(el.id)}
          />
        );
      })}
    </div>
  );
};
export default CarouselDots;
