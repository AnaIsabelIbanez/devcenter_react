import {GET_INITIAL_DATA_PRODUCTS, SET_SELECTED_PRODUCT} from './constants';

export const getInitialData = (ean) =>  ({
    type: GET_INITIAL_DATA_PRODUCTS,
    payload: ean
});

export const setSelectedProduct = (product) => ({
    type: SET_SELECTED_PRODUCT,
    payload: product
});
