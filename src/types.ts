export interface IngredientId {
  name: string;
  id: number;
}

export interface ExtendedIngred {
  aisle: string;
  name: string;
  id: number;
  measures: Measures;
  image: string;
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

export interface UserData {
  ingredients: ExtendedIngred[];
  recipes: number[];
  pantryIngredients: IngredientId[];
}

export interface Item {
  id: number | null;
  title: string;
}

export interface AutocompleteResult {
  id: number;
  title: string;
}
