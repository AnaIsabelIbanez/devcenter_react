import { createSelector } from 'reselect';

import {RETURN_REASONS, RETURN_SUBREASONS} from '../common/resourcesConstants';

const selectDetailLine = (state) => state.lineDetail;

const makeSelectGeneral = (state) => state.generalData;

const getGeneralData = (attribute) => createSelector(
    makeSelectGeneral,
    (state) => state[attribute]
);

const makeSelectDetail = (attribute) => createSelector(
    selectDetailLine,
    (state) => state.detail[attribute]
);

const selectFetch = (state) => state.fetch;

const getFetch = (attribute) => createSelector(
    selectFetch,
    (state) => state
);

const getDetail = () => makeSelectDetail('detail');

const getReasons = () => getGeneralData(RETURN_REASONS);
const getSubreasons = () => getGeneralData(RETURN_SUBREASONS);

export {
    getDetail,
    getFetch
};
