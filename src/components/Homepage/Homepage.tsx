import Carousel from './Carousel/Carousel';
import Layout from '../Layout/Layout';
import BestRecipes from '../Recipes/HomepageRecipes/BestRecipes';
import SignInModal from '../User/SignInModal';
import { Typography, useMediaQuery } from '@mui/material';
import WidescreenTop from './WidescreenTop';
import Greet from '../common/Greet';
import { CenterChildElement, FlexStart, FlexVertical } from '../styles/Global';
import RecipesTextField from '../common/ButtonTextField';
import SearchModal from '../common/ModalSearch';
import ButtonTextField from '../common/ButtonTextField';
import ModalRoot from '../common/ModalSearch';
import styles from './Homepage.module.scss';
import ModalSearch from '../common/ModalSearch';
import RecipeQuery from '../RecipeQuery/RecipeQuery';
import { useSetTitle } from '../hooks/useSetTitle';

const Homepage = () => {
  const matches = useMediaQuery('(min-width:40em)');
  useSetTitle();

  return (
    <div className={styles.homepage}>
      {matches ? (
        <WidescreenTop />
      ) : (
        <div className={`${styles.topContainer} py`}>
          <Greet />
          <ButtonTextField />
        </div>
      )}
      <Carousel />
      <div className='gap'>
        <CenterChildElement>
          <Typography variant='h2'>Popular Now</Typography>
        </CenterChildElement>
        <BestRecipes />
      </div>
      <ModalSearch />
      <SignInModal />
    </div>
  );
};

export default Homepage;
