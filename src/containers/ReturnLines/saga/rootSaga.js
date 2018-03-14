import {fork, takeLatest, takeEvery, take} from 'redux-saga/effects';

import {FETCH_DATA, SET_DATA} from '../../common/constants';
import {KEY_LINE_RESOURCE, GET_INITIAL_DATA_LINES, CHANGE_ATTRIBUTE_TABLE} from '../constants';
import {getType} from '../../../utils/utilities';
import dataSaga from '../../common/saga/getDataSaga';
import getInitialDataSaga from './getGeneralData';
import changeAttributeSaga from './changeAttribute';

export default function* product() {
    yield takeLatest(getType(FETCH_DATA, KEY_LINE_RESOURCE), dataSaga);
    yield takeLatest(GET_INITIAL_DATA_LINES, getInitialDataSaga);
    yield takeLatest(CHANGE_ATTRIBUTE_TABLE, changeAttributeSaga);
}
