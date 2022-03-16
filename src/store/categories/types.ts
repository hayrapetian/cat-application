export const CATEGORIES_REQUEST = 'CATEGORIES_REQUEST';
export const CATEGORIES_SUCCESS = 'CATEGORIES_SUCCESS';

export type CategoriesInitialState = {
  categoriesLoading: boolean,
  categories: Category[]
}

interface Category{
  id: number;
  name: string
}

export interface FetchCategories{
  route: string,
}