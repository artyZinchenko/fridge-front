import ButtonTextField from '../common/ButtonTextField';
import Greet from '../common/Greet';
import styles from './Homepage.module.scss';

const WidescreenTop = () => {
  return (
    <div className={`${styles.topContainer} ${styles.spaceAround} py`}>
      <Greet />
      <ButtonTextField />
    </div>
  );
};
export default WidescreenTop;
