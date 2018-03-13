import {fork, takeLatest, takeEvery} from 'redux-saga/effects';

import {FETCH_DATA} from '../../common/constants';
import {KEY_RETURN_RESOURCE, GET_INITIAL_DATA_RETURNS} from '../constants';
import {getType} from '../../../utils/utilities';
import dataSaga from '../../common/saga/getDataSaga';
import getInitialDataSaga from './getGeneralData';

export default function* product() {
    yield takeLatest(getType(FETCH_DATA, KEY_RETURN_RESOURCE), dataSaga);
    yield takeLatest(GET_INITIAL_DATA_RETURNS, getInitialDataSaga);
}
