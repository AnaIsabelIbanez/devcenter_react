import {call, put, spawn} from 'redux-saga/effects';

import {setGeneralList} from '../../common/generalData/reducer';
import {getCategories, getColors, getSizes, getBrands} from '../../../api/globalsResources';
import {CATEGORIES, COLORS, SIZES, BRANDS} from '../../common/generalData/constants';
import fetchApiSaga from '../../common/fetchManage/saga';

export default function* getGeneralData() {

    yield spawn(fetchApiSaga, getCategories, setGeneralList.bind(null, CATEGORIES), CATEGORIES);

    yield spawn(fetchApiSaga, getColors, setGeneralList.bind(null, COLORS), COLORS);

    yield spawn(fetchApiSaga, getSizes, setGeneralList.bind(null, SIZES), SIZES);

    yield spawn(fetchApiSaga, getBrands, setGeneralList.bind(null, BRANDS), BRANDS);

};
