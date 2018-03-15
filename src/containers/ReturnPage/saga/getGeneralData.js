import {call, put} from 'redux-saga/effects';

import {setGeneralList} from '../../common/reducer/general';
import {getReturnReasons, getReturnSubreasons, getReturnTypes, getWarehouseNames} from '../../../api/globalsResources';
import {RETURN_REASONS, RETURN_TYPES, WAREHOUSE_NAMES, RETURN_SUBREASONS} from '../../common/constants';

// const getData = function* (getResource, resourceName) {
//     const returnTypes = yield call(getResource);
//     yield put(setGeneralList(resourceName, returnTypes));
// };

export default function* getGeneralData() {
    const returnTypes = yield call(getReturnTypes);
    yield put(setGeneralList(RETURN_TYPES, returnTypes));
    //getData(getReturnTypes, RETURN_TYPES);

    const warehouseNames = yield call(getWarehouseNames);
    yield put(setGeneralList(WAREHOUSE_NAMES, warehouseNames));
    //getData(getWarehouseNames, WAREHOUSE_NAMES);

    const returnReasons = yield call(getReturnReasons);
    yield put(setGeneralList(RETURN_REASONS, returnReasons));
    //getData(getReturnReasons, RETURN_REASONS);

    const returnSubreasons = yield call(getReturnSubreasons);
    yield put(setGeneralList(RETURN_SUBREASONS, returnSubreasons));
};
