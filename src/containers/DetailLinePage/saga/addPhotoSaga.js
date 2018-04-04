import {call, put} from 'redux-saga/effects';

import {addPhoto as addPhotoApi} from '../../../api/return';
import {addPhoto} from '../actions';
import fetchApiSaga from '../../common/fetchManage/saga';
import {UPLOAD_PHOTO} from '../../common/resourcesConstants';

export default function* getGeneralData({file, lineId}) {
    const response = yield call(fetchApiSaga, addPhotoApi, null, UPLOAD_PHOTO, {file, lineId});

    if (!response.isBackendError) {
        yield put(addPhoto(response.photo));
    }

};
