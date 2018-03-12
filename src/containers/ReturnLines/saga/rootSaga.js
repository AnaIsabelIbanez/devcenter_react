import {fork, takeLatest, takeEvery} from 'redux-saga/effects';

import {FETCH_DATA} from '../../common/constants';
import {KEY_LINE_RESOURCE} from '../constants';
import {getType} from '../../../utils/utilities';
import dataSaga from '../../common/saga/getDataSaga';

export default function* product() {
    yield takeLatest(getType(FETCH_DATA, KEY_LINE_RESOURCE), dataSaga);
}
