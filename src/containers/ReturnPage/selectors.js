import { createSelector } from 'reselect';
import {RETURN_REASONS, RETURN_SUBREASONS, RETURN_TYPES, WAREHOUSE_NAMES} from '../common/constants';

const selectReturn = (state) => state.return;

const makeSelectList = (attribute) => createSelector(
    selectReturn,
    (state) => state.list[attribute]
);

const makeSelectFilters = (attribute) => createSelector(
    selectReturn,
    (state) => state.filters[attribute]
);

const makeSelectGlobal = (attribute) => createSelector(
    selectReturn,
    (state) => state.global[attribute]
);

const getFetch = () => createSelector(
    selectReturn,
    (state) => state.fetch
);

const getData = () => makeSelectList('data');
const getShowSpinner = () => makeSelectList('showSpinner');
const getMeta = () => makeSelectList('meta');
const getLinks = () => makeSelectList('links');
const getCurrentSort = () => makeSelectList('currentSort');

const getFields = () => makeSelectFilters('fields');
const getFilters = () => makeSelectFilters('filters');

const getReasons = () => makeSelectGlobal(RETURN_REASONS);
const getReturnTypes = () => makeSelectGlobal(RETURN_TYPES);
const getWarehouseNames = () => makeSelectGlobal(WAREHOUSE_NAMES);
const getSubreasons = () => makeSelectGlobal(RETURN_SUBREASONS);

export {
    getData,
    getShowSpinner,
    getMeta,
    getLinks,
    getCurrentSort,
    getFields,
    getFilters,
    getReasons,
    getReturnTypes,
    getWarehouseNames,
    getSubreasons,
    getFetch
};
