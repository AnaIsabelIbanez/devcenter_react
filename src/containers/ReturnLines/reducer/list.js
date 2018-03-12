import {tableReducerTypes, initialState} from '../../common/reducer/tableReducerTypes';
import {KEY_RETURN_RESOURCE} from '../constants';

function ProductReducer(state = initialState, {type, payload}) {

    const actions = tableReducerTypes(KEY_RETURN_RESOURCE);
    const action = actions[type];
    return action ? action(state, payload) : state;
}

export default ProductReducer;
