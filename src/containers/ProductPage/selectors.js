import { createSelector } from 'reselect';

const selectProduct = (state) => state.product;

const makeSelectList = (attribute) => createSelector(
    selectProduct,
    (productState) => productState.list[attribute]
);

const getProducts = () => makeSelectList('products');
const getShowSpinner = () => makeSelectList('showSpinner');
const getMeta = () => makeSelectList('meta');
const getLinks = () => makeSelectList('links');

export {
    getProducts,
    getShowSpinner,
    getMeta,
    getLinks
};
