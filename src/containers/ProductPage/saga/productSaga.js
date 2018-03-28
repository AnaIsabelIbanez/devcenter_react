import {put, call} from 'redux-saga/effects';

import {getGenericResource} from '../../../api/genericResource';
import {setData, setCurrentSort} from '../../common/table/actions';
import fetchApiSaga from '../../common/fetchManage/saga';
import {setSelectedProduct} from '../actions';

export default function* getDataSaga({payload = '', meta, resource}) {
    const response = yield call(fetchApiSaga, getGenericResource, setData.bind(null, resource), resource, payload);
    console.log('result', response);
    yield put(setCurrentSort(meta, resource));
    const {data} = response;
    const selectedProduct = data.length === 1 ? data[0] : null;
    yield put(setSelectedProduct(selectedProduct));
};
