import {call, put} from 'redux-saga/effects';

import {setGeneralList} from '../../common/reducer/general';
import {getReturnReasons, getReturnSubreasons, getReturnTypes, getWarehouseNames} from '../../../api/globalsResources';
import {RETURN_REASONS, RETURN_TYPES, WAREHOUSE_NAMES, RETURN_SUBREASONS} from '../../common/constants';
import {showError} from '../../App/actions';

// const getData = function* (getResource, resourceName) {
//     const returnTypes = yield call(getResource);
//     yield put(setGeneralList(resourceName, returnTypes));
// };

function* updateApi(apiRequest, setData, content) {
    try {
        const response = yield call(apiRequest, { content });
        yield put(setData(response));
    } catch (error) {
        yield put(showError(error));
    }
}


export default function* getGeneralData() {
    yield call(updateApi, getReturnTypes, setGeneralList.bind(null, RETURN_TYPES));
    // yield put(setGeneralList(RETURN_TYPES, returnTypes));
    //getData(getReturnTypes, RETURN_TYPES);

    // const warehouseNames = yield call(getWarehouseNames);
    // yield put(setGeneralList(WAREHOUSE_NAMES, warehouseNames));
    //
    // const returnReasons = yield call(getReturnReasons);
    // yield put(setGeneralList(RETURN_REASONS, returnReasons));
    //
    // const returnSubreasons = yield call(getReturnSubreasons);
    // yield put(setGeneralList(RETURN_SUBREASONS, returnSubreasons));
};
