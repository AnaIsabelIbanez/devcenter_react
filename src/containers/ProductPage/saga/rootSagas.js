import {fork, takeLatest, takeEvery} from 'redux-saga/effects';

import {FETCH_DATA} from '../../common/constants';
import {KEY_PRODUCT_RESOURCE, GET_INITIAL_DATA_PRODUCTS} from '../constants';
import {getType} from '../../../utils/utilities';
import dataTableSaga from '../../common/saga/getDataTableSaga';
import getInitialDataSaga from './getGeneralData';

export default function* product() {
    yield takeLatest(getType(FETCH_DATA, KEY_PRODUCT_RESOURCE), dataTableSaga);
    yield takeLatest(GET_INITIAL_DATA_PRODUCTS, getInitialDataSaga);
}
