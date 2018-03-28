import {put, spawn, call} from 'redux-saga/effects';

import {getGenericResource} from '../../../api/genericResource';
import {setData, setCurrentSort, resetTable} from './actions';
import fetchApiSaga from '../fetchManage/saga';

export default function* getDataSaga({payload = '', meta, resource}) {
    const result = yield call(fetchApiSaga, getGenericResource, setData.bind(null, resource), resource, payload);
    console.log('result', result);
    yield put(setCurrentSort(meta, resource));
    if (result.isBackendError === true) {
        yield put(resetTable(resource));
    }
};
