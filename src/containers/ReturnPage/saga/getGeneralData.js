import {spawn, put} from 'redux-saga/effects';

import {setGeneralList} from '../../common/generalData/reducer';
import {getReturnReasons, getReturnSubreasons, getReturnTypes, getWarehouseNames} from '../../../api/globalsResources';
import {RETURN_REASONS, RETURN_TYPES, WAREHOUSE_NAMES, RETURN_SUBREASONS} from '../../common/generalData/constants';
import fetchApiSaga from '../../common/fetchManage/saga';

// const getData = function* (getResource, resourceName) {
//     const returnTypes = yield call(getResource);
//     yield put(setGeneralList(resourceName, returnTypes));
// };


export default function* getGeneralData() {

    yield spawn(fetchApiSaga, getReturnTypes, setGeneralList.bind(null, RETURN_TYPES), RETURN_TYPES);
    // yield put(setGeneralList(RETURN_TYPES, returnTypes));
    //getData(getReturnTypes, RETURN_TYPES);


    yield spawn(fetchApiSaga, getWarehouseNames, setGeneralList.bind(null, WAREHOUSE_NAMES), WAREHOUSE_NAMES);
    // const warehouseNames = yield call(getWarehouseNames);
    // yield put(setGeneralList(WAREHOUSE_NAMES, warehouseNames));
    //

    yield spawn(fetchApiSaga, getReturnReasons, setGeneralList.bind(null, RETURN_REASONS), RETURN_REASONS);
    // const returnReasons = yield call(getReturnReasons);
    // yield put(setGeneralList(RETURN_REASONS, returnReasons));
    //

    yield spawn(fetchApiSaga, getReturnSubreasons, setGeneralList.bind(null, RETURN_SUBREASONS), RETURN_SUBREASONS);
    // const returnSubreasons = yield call(getReturnSubreasons);
    // yield put(setGeneralList(RETURN_SUBREASONS, returnSubreasons));
};
