export interface IngredApi {
  name: string;
  id: number;
  inPantry: boolean;
  inCart: boolean;
  selected: boolean;
  aisle?: string;
  amount?: number;
  measures?: Measures;
  image?: string;
}

export interface ExtendedIngred {
  aisle: string;
  amount: number;
  name: string;
  id: number;
  measures: Measures;
}

export interface Measures {
  metric: MeasuresObj;
  us: MeasuresObj;
}

export interface MeasuresObj {
  amount: number;
  unitLong: string;
}

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: 'jpg' | 'JPG';
  readyInMinutes: number;
  sourceName: string;
  sourceUrl: string;
  servings: number;
  aggregateLikes: number;
  healthScore: number;
  cheap: boolean;
  cuisines: Array<string>;
  dairyFree: boolean;
  glutenFree: boolean;
  vegan: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  extendedIngredients: ExtendedIngred[];
  summary: string;
  creditsText: string;
}

// export interface IngredFromApi {
//   aisle: string;
//   amount: number;
//   name: string;
//   image: string;
// }

// export interface IngredUI {
//   type: string;
//   name: string;
//   id: number;
//   selected: boolean;
// }
