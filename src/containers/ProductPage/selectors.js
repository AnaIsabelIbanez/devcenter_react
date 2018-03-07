import { createSelector } from 'reselect';

const selectProduct = (state) => state.product;

const makeSelectList = (attribute) => createSelector(
    selectProduct,
    (productState) => productState.list[attribute]
);

const getProducts = () => makeSelectList('data');
const getShowSpinner = () => makeSelectList('showSpinner');
const getMeta = () => makeSelectList('meta');
const getLinks = () => makeSelectList('links');
const getCurrentSort = () => makeSelectList('currentSort');
const getColumns = () => makeSelectList('columns');

export {
    getProducts,
    getShowSpinner,
    getMeta,
    getLinks,
    getCurrentSort,
    getColumns
};
