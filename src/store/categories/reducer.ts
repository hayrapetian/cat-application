import { AnyAction } from 'redux';

import {
  CATEGORIES_REQUEST, CATEGORIES_SUCCESS,
  CategoriesInitialState
} from './types';

export const initialStateCategroies: CategoriesInitialState = {
  categoriesLoading: false,
  categories: []
}

export default function reducer(state = initialStateCategroies, action: AnyAction) {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return {
        ...state,
        categoriesLoading: true,
      };
    case CATEGORIES_SUCCESS:
      return {
        ...state,
        categoriesLoading: false,
        categories: action.payload.categories,
      };

    default:
      return state;
  }
}
