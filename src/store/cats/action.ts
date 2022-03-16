import {RootThunkAction} from '../types';
import axios from 'axios'

import {
    CATS_REQUEST,
    CATS_SUCCESS, FetchCats,
} from './types';

export const fetchCats =
    ({route}: FetchCats): RootThunkAction =>
        async (dispatch) => {
            try {
                dispatch({
                    type: CATS_REQUEST,
                });

                axios.defaults.headers.common['x-api-key'] = String(process.env.REACT_APP_API_KEY)
                const res = await axios.get(route)
                if (res?.status !== 200) {
                    throw new Error('Something went wrong');
                }
                dispatch({
                    type: CATS_SUCCESS,
                    payload: {cats: res.data},
                });
            } catch (error: any) {
                throw new Error(error)
            }
        };
