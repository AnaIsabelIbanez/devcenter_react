import {call, put} from 'redux-saga/effects';

import {setGeneralList} from '../../common/reducer/general';
import {getCategories, getColors, getSizes, getBrands} from '../../../api/globalsResources';
import {CATEGORIES, COLORS, SIZES, BRANDS} from '../../common/constants';

export default function* getGeneralData() {
    const categories = yield call(getCategories);
    yield put(setGeneralList(CATEGORIES, categories));

    const colors = yield call(getColors);
    yield put(setGeneralList(COLORS, colors));

    const sizes = yield call(getSizes);
    yield put(setGeneralList(SIZES, colors));

    const brands = yield call(getBrands);
    yield put(setGeneralList(BRANDS, colors));
};
