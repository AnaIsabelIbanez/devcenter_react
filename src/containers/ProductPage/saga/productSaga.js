import {put, call} from 'redux-saga/effects';

import {getGenericResource} from '../../../api/genericResource';
import {setData, setCurrentSort, resetTable} from '../../common/table/actions';
import fetchApiSaga from '../../common/fetchManage/saga';
import {setSelectedProduct} from '../actions';

export default function* getDataSaga({payload = '', meta, resource}) {
    const response = yield call(fetchApiSaga, getGenericResource, setData.bind(null, resource), resource, payload);
    console.log('result', response);
    yield put(setCurrentSort(meta, resource));
    if (response.isBackendError === true) {
        yield put(resetTable(resource));
    } else {
        const {data} = response;
        if (data.length === 1) {
            yield put(setSelectedProduct(data[0]));
        }
    }
};
