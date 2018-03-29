import {tableReducerTypes, initialState} from '../../common/table/reducerTypes';
import {KEY_PRODUCT_RESOURCE} from '../constants';
import {SET_DATA} from '../../common/table/constants';

function ProductReducer(state = initialState, {type, payload}) {

    const actions = tableReducerTypes(KEY_PRODUCT_RESOURCE);
    const action = actions[type];
    return action ? action(state, payload) : state;
}

export default ProductReducer;
