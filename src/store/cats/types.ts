export const CATS_REQUEST = 'CATS_REQUEST';
export const CATS_SUCCESS = 'CATS_SUCCESS';

export interface CatsInitialState {
  catsLoading: boolean;
  cats: Cats[]
}

export interface Cats {
  id: number;
  url: string;
  width: number,
  height: number
  categories?: Category[]
  breeds: any[]
}

interface Category{
  id: number;
  name: string
}

export interface FetchCats {
  route: string;
}