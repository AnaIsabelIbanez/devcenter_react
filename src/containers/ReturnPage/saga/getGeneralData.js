import {spawn} from 'redux-saga/effects';

import {setGeneralList} from '../../common/generalData/reducer';
import {getReturnReasons, getReturnSubreasons, getReturnTypes, getWarehouseNames} from '../../../api/globalsResources';
import {RETURN_REASONS, RETURN_TYPES, WAREHOUSE_NAMES, RETURN_SUBREASONS} from '../../common/resourcesConstants';
import fetchApiSaga from '../../common/fetchManage/saga';

export default function* getGeneralData() {
    yield spawn(fetchApiSaga, getReturnTypes, setGeneralList.bind(null, RETURN_TYPES), RETURN_TYPES);
    yield spawn(fetchApiSaga, getWarehouseNames, setGeneralList.bind(null, WAREHOUSE_NAMES), WAREHOUSE_NAMES);
    yield spawn(fetchApiSaga, getReturnReasons, setGeneralList.bind(null, RETURN_REASONS), RETURN_REASONS);
    yield spawn(fetchApiSaga, getReturnSubreasons, setGeneralList.bind(null, RETURN_SUBREASONS), RETURN_SUBREASONS);
};
