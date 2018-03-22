import {put, spawn} from 'redux-saga/effects';

import {getGenericResource} from '../../../api/genericResource';
import {setData, setCurrentSort} from './actions';
import fetchApiSaga from '../fetchManage/saga';

export default function* getDataSaga({payload = '', meta, resource}) {
    yield spawn(fetchApiSaga, getGenericResource, setData.bind(null, resource), resource, payload);
    yield put(setCurrentSort(meta, resource));
};
