import {fork, takeLatest, takeEvery} from 'redux-saga/effects';

import {FETCH_DATA} from '../constants';
import productSaga from './productSaga';

export default function* product() {
    yield takeLatest(FETCH_DATA, productSaga);
}
