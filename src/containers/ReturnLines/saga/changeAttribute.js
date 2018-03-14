import {call, put} from 'redux-saga/effects';

import {patchGenericResource} from '../../../api/genericResource';
import {createBodyPatch} from '../../../api/utilities';
import {setAttributeTable} from '../actions';

export default function* changeAttribute({payload: {attrChanged, dataRow}}) {
    const body = createBodyPatch(dataRow.type, dataRow.id, attrChanged);
    const changedLine = yield call(patchGenericResource, dataRow.self, body);
    yield put(setAttributeTable(changedLine));
};
