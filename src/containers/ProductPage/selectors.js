import { createSelector } from 'reselect';
import {CATEGORIES, COLORS, SIZES, BRANDS} from '../common/generalData/constants';

const selectProduct = (state) => state.product;

const makeSelectList = (attribute) => createSelector(
    selectProduct,
    (state) => state.list[attribute]
);

const makeSelectFilters = (attribute) => createSelector(
    selectProduct,
    (state) => state.filters[attribute]
);

const makeSelectGeneral = (state) => state.generalData;

const getGeneralData = (attribute) => createSelector(
    makeSelectGeneral,
    (state) => state[attribute]
);

const getFetch = () => (state) => state.fetch;

const makeSelectDetail = (attribute) => createSelector(
    selectProduct,
    (state) => state.detail[attribute]
);

const getSelectedProduct = () => makeSelectDetail('selectedProduct');
const getMainPhoto = () => makeSelectDetail('mainPhoto');
const getSmallPhotos = () => makeSelectDetail('smallPhotos');

const getData = () => makeSelectList('data');
const getShowSpinner = () => makeSelectList('showSpinner');
const getMeta = () => makeSelectList('meta');
const getLinks = () => makeSelectList('links');
const getCurrentSort = () => makeSelectList('currentSort');

const getFields = () => makeSelectFilters('fields');
const getFilters = () => makeSelectFilters('filters');
const getFiltering = () => makeSelectFilters('filtering');

const getColors = () => getGeneralData(COLORS);
const getCategories = () => getGeneralData(CATEGORIES);
const getSizes = () => getGeneralData(SIZES);
const getBrands = () => getGeneralData(BRANDS);

export {
    getData,
    getShowSpinner,
    getMeta,
    getLinks,
    getCurrentSort,
    getFields,
    getFilters,
    getColors,
    getCategories,
    getSizes,
    getBrands,
    getFetch,
    getSelectedProduct,
    getFiltering,
    getMainPhoto,
    getSmallPhotos
};
