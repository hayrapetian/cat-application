import {RootThunkAction} from '../types';
import axios from 'axios'

import {
    CATEGORIES_REQUEST,
    CATEGORIES_SUCCESS, FetchCategories,
} from './types';

export const fetchCategories =
    ({route}: FetchCategories): RootThunkAction =>
        async (dispatch) => {
            try {
                dispatch({
                    type: CATEGORIES_REQUEST,
                });

                axios.defaults.headers.common['x-api-key'] = String(process.env.REACT_APP_API_KEY)
                const res = await axios.get(route)

                if (res?.status !== 200) {
                    throw new Error('Something went wrong');
                }

                dispatch({
                    type: CATEGORIES_SUCCESS,
                    payload: {categories: res.data},
                });
            } catch (error: any) {
                throw new Error(error)
            }
        };