import { createSelector } from 'reselect';

import {RETURN_REASONS, RETURN_SUBREASONS} from '../common/resourcesConstants';

const selectReturn = (state) => state.lines;

const makeSelectList = (attribute) => createSelector(
    selectReturn,
    (state) => state.list[attribute]
);

const makeSelectGeneral = (state) => state.generalData;

const getGeneralData = (attribute) => createSelector(
    makeSelectGeneral,
    (state) => state[attribute]
);

const makeSelectDetail = (attribute) => createSelector(
    selectReturn,
    (state) => state.detail[attribute]
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

const getDetail = () => makeSelectDetail('detail');

const getReasons = () => getGeneralData(RETURN_REASONS);
const getSubreasons = () => getGeneralData(RETURN_SUBREASONS);

export {
    getData,
    getShowSpinner,
    getMeta,
    getLinks,
    getReasons,
    getSubreasons,
    getDetail,
    getFetch
};
