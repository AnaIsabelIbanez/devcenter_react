import {SET_PRODUCTS, SET_CURRENT_SORT} from '../constants';
import {tableReducerTypes, initialState} from '../../common/reducer/tableReducerTypes';

const initialStateProducts = {
    ...initialState,
    columns: [
        {
            Header: 'Source',
            accessor: 'source'
        },
        {
            Header: 'External id',
            accessor: 'external_id'
        },
        {
            Header: 'Sku',
            accessor: 'sku'
        }
    ]
};

function ProductReducer(state = initialStateProducts, {type, payload}) {

    const actions = tableReducerTypes('product');
    const action = actions[type];
    return action ? action(state, payload) : state;
}

export default ProductReducer;
