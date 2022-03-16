import { combineReducers, AnyAction } from 'redux';

import { CLEAR_ALL_REDUCERS_DATA, RootState } from './types';

import cats from './cats';

import { initialStateCats } from './cats/reducer';
import {initialStateCategroies} from "./categories/reducer";
import categories from "./categories";

export const RootInitialState = {
  cats: initialStateCats,
  categories: initialStateCategroies
};

const allReducers = combineReducers({
  cats: cats.reducer,
  categories: categories.reducer
});

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  switch (action.type) {
    case CLEAR_ALL_REDUCERS_DATA:
      return {
        ...RootInitialState,
      };

    default:
      return allReducers(state, action);
  }
};

export default rootReducer;
