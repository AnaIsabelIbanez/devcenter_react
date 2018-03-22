import {tableReducerTypes, initialState} from '../../common/table/reducerTypes';
import {KEY_RETURN_RESOURCE} from '../constants';

function ReturnReducer(state = initialState, {type, payload}) {

    const actions = tableReducerTypes(KEY_RETURN_RESOURCE);
    const action = actions[type];
    return action ? action(state, payload) : state;
}

export default ReturnReducer;
