import { createSelector } from 'reselect';
import {CATEGORIES, COLORS, SIZES, BRANDS} from '../common/constants';

const selectProduct = (state) => state.product;

const makeSelectList = (attribute) => createSelector(
    selectProduct,
    (state) => state.list[attribute]
);

const makeSelectFilters = (attribute) => createSelector(
    selectProduct,
    (state) => state.filters[attribute]
);

const makeSelectGlobal = (attribute) => createSelector(
    selectProduct,
    (state) => state.global[attribute]
);

const getData = () => makeSelectList('data');
const getShowSpinner = () => makeSelectList('showSpinner');
const getMeta = () => makeSelectList('meta');
const getLinks = () => makeSelectList('links');
const getCurrentSort = () => makeSelectList('currentSort');
const getColumns = () => makeSelectList('columns');

const getFields = () => makeSelectFilters('fields');
const getFilters = () => makeSelectFilters('filters');

const getColors = () => makeSelectGlobal(COLORS);
const getCategories = () => makeSelectGlobal(CATEGORIES);
const getSizes = () => makeSelectGlobal(SIZES);
const getBrands = () => makeSelectGlobal(BRANDS);

export {
    getData,
    getShowSpinner,
    getMeta,
    getLinks,
    getCurrentSort,
    getColumns,
    getFields,
    getFilters,
    getColors,
    getCategories,
    getSizes,
    getBrands
};
