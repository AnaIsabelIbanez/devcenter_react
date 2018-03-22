import { createSelector } from 'reselect';
import {RETURN_REASONS, RETURN_SUBREASONS, RETURN_TYPES, WAREHOUSE_NAMES} from '../common/generalData/constants';

const selectReturn = (state) => state.return;

const makeSelectList = (attribute) => createSelector(
    selectReturn,
    (state) => state.list[attribute]
);

const makeSelectFilters = (attribute) => createSelector(
    selectReturn,
    (state) => state.filters[attribute]
);

const makeSelectGeneral = (state) => state.generalData;

const getGeneralData = (attribute) => createSelector(
    makeSelectGeneral,
    (state) => state[attribute]
);

const selectFetch = (state) => state.fetch;

const getFetch = (attribute) => createSelector(
    selectFetch,
    (state) => state
);

const getData = () => makeSelectList('data');
const getShowSpinner = () => makeSelectList('showSpinner');
const getMeta = () => makeSelectList('meta');
const getLinks = () => makeSelectList('links');
const getCurrentSort = () => makeSelectList('currentSort');

const getFields = () => makeSelectFilters('fields');
const getFilters = () => makeSelectFilters('filters');

const getReasons = () => getGeneralData(RETURN_REASONS);
const getReturnTypes = () => getGeneralData(RETURN_TYPES);
const getWarehouseNames = () => getGeneralData(WAREHOUSE_NAMES);
const getSubreasons = () => getGeneralData(RETURN_SUBREASONS);

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
