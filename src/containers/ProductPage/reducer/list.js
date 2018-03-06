import {SET_PRODUCTS} from '../constants';

const initialState = {
    products: [],
    meta: {
        currentSort: [],
        currentPage: 1,
        totalPages: 10,
        pageSize: 20,
        totalResults: 0
    },
    links: {}
};


function ProductReducer(state = initialState, {type, payload}) {

    switch (type) {
        case SET_PRODUCTS:
            console.log('set_products', payload);
            return {
                ...state,
                products: payload.data.map((data) => ({id: data.id, ...data.attributes})),
                meta: payload.meta,
                links: payload.links
            };
        default:
            return state;
    }
}

export default ProductReducer;
