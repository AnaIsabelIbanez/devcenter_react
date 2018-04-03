import {spawn} from 'redux-saga/effects';

import {setGeneralList} from '../../common/generalData/reducer';
import {getReturnReasons, getReturnSubreasons, getReturnTypes} from '../../../api/globalsResources';
import {getReturn} from '../../../api/return';
import {RETURN_REASONS, RETURN_SUBREASONS, DETAIL_RETURN_LINES} from '../../common/resourcesConstants';
import {setDetailReturn} from '../actions';
import fetchApiSaga from '../../common/fetchManage/saga';

export default function* getGeneralData({payload}) {
    yield spawn(fetchApiSaga, getReturnSubreasons, setGeneralList.bind(null, RETURN_SUBREASONS), RETURN_SUBREASONS);

    yield spawn(fetchApiSaga, getReturnReasons, setGeneralList.bind(null, RETURN_REASONS), RETURN_REASONS);

    yield spawn(fetchApiSaga, getReturn, setDetailReturn, DETAIL_RETURN_LINES, payload);
};
