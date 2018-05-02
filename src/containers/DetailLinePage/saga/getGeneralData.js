import {spawn} from 'redux-saga/effects';

import {setGeneralList} from '../../common/generalData/reducer';
import {getReturnReasons, getReturnSubreasons} from '../../../api/globalsResources';
import {getLine} from '../../../api/return';
import {RETURN_REASONS, RETURN_SUBREASONS, DETAIL_LINE} from '../../common/resourcesConstants';
import {setDetailLine} from '../actions';
import fetchApiSaga from '../../common/fetchManage/saga';

export default function* getGeneralData({payload}) {
    yield spawn(fetchApiSaga, getReturnSubreasons, setGeneralList.bind(null, RETURN_SUBREASONS), RETURN_SUBREASONS);

    yield spawn(fetchApiSaga, getReturnReasons, setGeneralList.bind(null, RETURN_REASONS), RETURN_REASONS);

    yield spawn(fetchApiSaga, getLine, setDetailLine, DETAIL_LINE, payload);
};
