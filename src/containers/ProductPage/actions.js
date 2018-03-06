import {
    FETCH_DATA,
    SET_PRODUCTS
} from './constants';

export const fetchData = (queryParams) => ({
    type: FETCH_DATA,
    payload: queryParams
});

export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    payload: products
});
