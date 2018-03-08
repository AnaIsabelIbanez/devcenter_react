import { createSelector } from 'reselect';

const selectProduct = (state) => state.product;

const makeSelectList = (attribute) => createSelector(
    selectProduct,
    (productState) => productState.list[attribute]
);

const getData = () => makeSelectList('data');
const getShowSpinner = () => makeSelectList('showSpinner');
const getMeta = () => makeSelectList('meta');
const getLinks = () => makeSelectList('links');
const getCurrentSort = () => makeSelectList('currentSort');
const getColumns = () => makeSelectList('columns');

export {
    getData,
    getShowSpinner,
    getMeta,
    getLinks,
    getCurrentSort,
    getColumns
};
