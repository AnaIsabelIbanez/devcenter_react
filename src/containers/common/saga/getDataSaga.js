import {call, put} from 'redux-saga/effects';

import {getGenericResource} from '../../../api/genericResource';
import {setData, setCurrentSort} from '../../common/actions/table';

export default function* productSaga({payload = '', meta, resource}) {
    const data = yield call(getGenericResource, payload);
    yield put(setData(data, resource));
    yield put(setCurrentSort(meta, resource));
};
