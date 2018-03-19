import {spawn} from 'redux-saga/effects';

import {setGeneralList} from '../../common/reducer/general';
import {getReturnReasons, getReturnSubreasons, getReturnTypes} from '../../../api/globalsResources';
import {getReturn} from '../../../api/return';
import {RETURN_REASONS, RETURN_SUBREASONS} from '../../common/constants';
import {setDetailReturn} from '../actions';
import fetchApiSaga from '../../common/saga/fetchApiSaga';

export default function* getGeneralData({payload}) {
    yield spawn(fetchApiSaga, getReturnSubreasons, setGeneralList.bind(null, RETURN_SUBREASONS), RETURN_SUBREASONS);

    yield spawn(fetchApiSaga, getReturnReasons, setGeneralList.bind(null, RETURN_REASONS), RETURN_REASONS);
    // const reasons = yield call(getReturnReasons);
    // yield put(setGeneralList(RETURN_REASONS, reasons));

    yield spawn(fetchApiSaga, getReturn, setDetailReturn, 'detailLine', payload);
    // const detailReturn = yield call(getReturn, payload);
    // yield put(setDetailReturn(detailReturn));
};
