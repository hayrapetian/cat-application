import { AnyAction } from 'redux';

import {
  CATS_REQUEST, CATS_SUCCESS,
  CatsInitialState
} from './types';

export const initialStateCats: CatsInitialState = {
  catsLoading: false,
  cats: [],
};

export default function reducer(state = initialStateCats, action: AnyAction) {
  switch (action.type) {
    case CATS_REQUEST:
      return {
        ...state,
        catsLoading: true,
      };
    case CATS_SUCCESS:
      return {
        ...state,
        catsLoading: false,
        cats: action.payload.cats
      };

    default:
      return state;
  }
}
