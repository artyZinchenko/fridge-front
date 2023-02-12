import Carousel from '../components/homepage-components/Carousel';
import Layout from '../components/common/Layout';
import BestRecipes from '../components/homepage-components/BestRecipes';
import SignInModal from '../components/user-components/SignInModal';

const Homepage = () => {
  return (
    <Layout>
      <Carousel />
      <div>recipes for you recipes list...</div>
      <BestRecipes />
    </Layout>
  );
};

export default Homepage;
