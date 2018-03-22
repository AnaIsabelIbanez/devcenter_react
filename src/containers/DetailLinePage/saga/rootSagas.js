import {takeLatest} from 'redux-saga/effects';

import {GET_INITIAL_DATA_DETAIL_LINE} from '../constants';
import getInitialDataSaga from './getGeneralData';

export default function* detailLineSaga() {
    yield takeLatest(GET_INITIAL_DATA_DETAIL_LINE, getInitialDataSaga);
}
