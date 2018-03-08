import {tableReducerTypes, initialState} from '../../common/reducer/tableReducerTypes';
import {KEY_PRODUCT_RESOURCE} from '../constants';

const initialStateProducts = {
    ...initialState,
    columns: [
        {
            Header: 'Sku',
            accessor: 'sku'
        },
        {
            Header: 'Ean',
            accessor: 'ean'
        },
        {
            Header: 'Referencia física',
            accessor: 'ref_physical'
        },
        {
            Header: 'Referencia Comercial',
            accessor: 'sku'
        },
        {
            Header: 'Referencia Logística',
            accessor: 'sku'
        },
        {
            Header: 'Color',
            accessor: 'color'
        },
        {
            Header: 'Size',
            accessor: 'size'
        },
        {
            Header: 'Short description',
            accessor: 'short_description'
        },
        {
            Header: 'Campaign id',
            accessor: 'campaign_id'
        },
        {
            Header: 'Campaign name',
            accessor: 'campaign_name'
        }
    ]
};

function ProductReducer(state = initialStateProducts, {type, payload}) {

    const actions = tableReducerTypes(KEY_PRODUCT_RESOURCE);
    const action = actions[type];
    return action ? action(state, payload) : state;
}

export default ProductReducer;
