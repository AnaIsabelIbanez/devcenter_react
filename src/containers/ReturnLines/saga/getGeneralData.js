import {call, put} from 'redux-saga/effects';

import {setGeneralList} from '../../common/reducer/general';
import {getReturnReasons, getReturnSubreasons} from '../../../api/globalsResources';
import {getReturn} from '../../../api/return';
import {RETURN_REASONS, RETURN_SUBREASONS} from '../../common/constants';
import {setDetailReturn} from '../actions';

export default function* getGeneralData({payload}) {
    const subreasons = yield call(getReturnSubreasons);
    yield put(setGeneralList(RETURN_SUBREASONS, subreasons));

    const reasons = yield call(getReturnReasons);
    yield put(setGeneralList(RETURN_REASONS, reasons));

    const detailReturn = yield call(getReturn, payload);
    yield put(setDetailReturn(detailReturn));
};
