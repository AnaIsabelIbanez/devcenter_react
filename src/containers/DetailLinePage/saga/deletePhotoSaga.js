import {spawn, put} from 'redux-saga/effects';

import {deletePhoto as deletePhotoApi} from '../../../api/return';
import {DELETE_PHOTO} from '../../common/resourcesConstants';
import {deletePhoto} from '../actions';
import fetchApiSaga from '../../common/fetchManage/saga';

export default function* getGeneralData({idPhoto}) {
    const response = yield spawn(fetchApiSaga, deletePhotoApi, null, DELETE_PHOTO, idPhoto);

    if (!response.isBackendError && !response.error) {
        yield put(deletePhoto(idPhoto));
    }
};
