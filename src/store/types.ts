import { ThunkAction } from 'redux-thunk';
import { AnyAction } from 'redux';

import { CatsInitialState } from './cats/types';
import {CategoriesInitialState} from './categories/types'

export const CLEAR_ALL_REDUCERS_DATA = 'CLEAR_ALL_REDUCERS_DATA';

export interface RootState {
  cats: CatsInitialState;
  categories: CategoriesInitialState
}

export type RootThunkAction = ThunkAction<void, RootState, null, AnyAction>;
