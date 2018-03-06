import {takeLatest, call, put} from 'redux-saga/effects';
import {delay} from 'redux-saga';


import {getProducts} from '../../../api/product';
import {setProducts} from '../actions';

export default function* productSaga({payload = ''}) {
    const products = yield call(getProducts, payload);
    yield put(setProducts(products,));
};
