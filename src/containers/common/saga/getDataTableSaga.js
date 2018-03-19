import {call, put, spawn} from 'redux-saga/effects';

import {getGenericResource} from '../../../api/genericResource';
import {setData, setCurrentSort} from '../../common/actions/table';
import fetchApiSaga from './fetchApiSaga';

export default function* productSaga({payload = '', meta, resource}) {
    yield spawn(fetchApiSaga, getGenericResource, setData.bind(null, resource), resource, payload);

    //const data = yield call(getGenericResource, payload);
    //yield put(setData(resource, data));
    console.log('antes sort');
    yield put(setCurrentSort(meta, resource));
    console.log('despues sort');
};
