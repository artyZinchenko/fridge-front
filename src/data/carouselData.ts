export interface CarouselData {
  img: string;
  title: string;
  id: number;
  fn: Redirect | SignIn;
}

interface SignIn {
  type: 'register';
  title: string;
}

interface Redirect {
  type: 'redirect';
  to: 'search';
  searchByIngreds: boolean;
  title: string;
}

const carouselData: CarouselData[] = [
  {
    id: 0,
    img: 'img-ingreds',
    title:
      'Search recipes by ingredients on hand. Explore new flavors and save time. ',
    fn: {
      type: 'redirect',
      to: 'search',
      searchByIngreds: true,
      title: 'Try it now',
    },
  },
  {
    id: 1,
    img: 'img-search',
    title:
      'Easily find diverse recipes with our advanced search. Impress your taste buds and try something new!',
    fn: {
      type: 'redirect',
      to: 'search',
      searchByIngreds: false,
      title: 'Search now',
    },
  },
  {
    id: 2,
    img: 'img-recipe',
    title:
      'Keep your favorite recipes in one place! Create an account now and never lose track of your favorite recipes again!',
    fn: {
      type: 'register',
      title: 'Sign in',
    },
  },
];

export default carouselData;
