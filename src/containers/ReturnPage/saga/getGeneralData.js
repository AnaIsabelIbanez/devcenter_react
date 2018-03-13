import {call, put} from 'redux-saga/effects';

import {setGeneralList} from '../../common/reducer/general';
import {getReturnReasons, getReturnSubreasons} from '../../../api/globalsResources';
import {RETURN_REASONS, RETURN_SUBREASONS} from '../../common/constants';

export default function* getGeneralData() {
    const subreasons = yield call(getReturnSubreasons);
    yield put(setGeneralList(RETURN_SUBREASONS, subreasons));

    const reasons = yield call(getReturnReasons);
    yield put(setGeneralList(RETURN_REASONS, reasons));
};
