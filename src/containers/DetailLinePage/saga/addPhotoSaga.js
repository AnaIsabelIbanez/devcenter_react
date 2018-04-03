import {spawn, put} from 'redux-saga/effects';

import {addPhoto} from '../../../api/return';
import {deletePhoto} from '../actions';
import fetchApiSaga from '../../common/fetchManage/saga';

export default function* getGeneralData({file, lineId}) {
    console.log('before upload');
    const response = yield spawn(fetchApiSaga, addPhoto, null, '', {file, lineId});

    console.log('response upload', response);

    // if (!response.isBackendError && !response.error) {
    //     yield put(deletePhoto(response));
    // }

};
