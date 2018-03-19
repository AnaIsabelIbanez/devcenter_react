import { createSelector } from 'reselect';

import {RETURN_REASONS, RETURN_SUBREASONS} from '../common/constants';

const selectReturn = (state) => state.lines;

const makeSelectList = (attribute) => createSelector(
    selectReturn,
    (state) => state.list[attribute]
);

const makeSelectGlobal = (attribute) => createSelector(
    selectReturn,
    (state) => state.global[attribute]
);

const makeSelectDetail = (attribute) => createSelector(
    selectReturn,
    (state) => state.detail[attribute]
);

const getFetch = () => createSelector(
    selectReturn,
    (state) => state.fetch
);

const getData = () => makeSelectList('data');
const getShowSpinner = () => makeSelectList('showSpinner');
const getMeta = () => makeSelectList('meta');
const getLinks = () => makeSelectList('links');

const getDetail = () => makeSelectDetail('detail');

const getReasons = () => makeSelectGlobal(RETURN_REASONS);
const getSubreasons = () => makeSelectGlobal(RETURN_SUBREASONS);

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
