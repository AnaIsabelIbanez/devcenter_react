import {takeLatest} from 'redux-saga/effects';

import {GET_INITIAL_DATA_DETAIL_LINE, FETCH_DELETE_PHOTO, UPLOAD_PHOTO} from '../constants';
import getInitialDataSaga from './getGeneralData';
import deletePhotoSaga from './deletePhotoSaga';
import addPhotoSaga from './addPhotoSaga';

export default function* detailLineSaga() {
    yield takeLatest(GET_INITIAL_DATA_DETAIL_LINE, getInitialDataSaga);
    yield takeLatest(FETCH_DELETE_PHOTO, deletePhotoSaga);
    yield takeLatest(UPLOAD_PHOTO, addPhotoSaga);
}
