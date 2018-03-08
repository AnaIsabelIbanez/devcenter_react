import { createSelector } from 'reselect';

const selectReturn = (state) => state.return;

const makeSelectList = (attribute) => createSelector(
    selectReturn,
    (state) => state.list[attribute]
);

const makeSelectFilters = (attribute) => createSelector(
    selectReturn,
    (state) => state.filters[attribute]
);

const getData = () => makeSelectList('data');
const getShowSpinner = () => makeSelectList('showSpinner');
const getMeta = () => makeSelectList('meta');
const getLinks = () => makeSelectList('links');
const getCurrentSort = () => makeSelectList('currentSort');

const getFields = () => makeSelectFilters('fields');
const getFilters = () => makeSelectFilters('filters');

export {
    getData,
    getShowSpinner,
    getMeta,
    getLinks,
    getCurrentSort,
    getFields,
    getFilters
};
