import {spawn, put} from 'redux-saga/effects';

import {setGeneralList} from '../../common/generalData/reducer';
import {getBrands, getCategories, getColors, getSizes} from '../../../api/globalsResources';
import {BRANDS, CATEGORIES, COLORS, SIZES} from '../../common/generalData/constants';
import {launchFilter, changeField, clearFields, clearFilters} from '../../common/filters/actions';
import fetchApiSaga from '../../common/fetchManage/saga';
import {KEY_PRODUCT_RESOURCE} from '../constants';

export default function* getGeneralData({payload}) {


    yield spawn(fetchApiSaga, getCategories, setGeneralList.bind(null, CATEGORIES), CATEGORIES);

    yield spawn(fetchApiSaga, getColors, setGeneralList.bind(null, COLORS), COLORS);

    yield spawn(fetchApiSaga, getSizes, setGeneralList.bind(null, SIZES), SIZES);

    yield spawn(fetchApiSaga, getBrands, setGeneralList.bind(null, BRANDS), BRANDS);

    if (payload) {
        console.log('ean', payload);
        yield put(clearFields(KEY_PRODUCT_RESOURCE));
        yield put(changeField(KEY_PRODUCT_RESOURCE, {ean: payload}));
        yield put(launchFilter(KEY_PRODUCT_RESOURCE));
    }
};
