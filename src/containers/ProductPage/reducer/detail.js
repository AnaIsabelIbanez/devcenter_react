import {SET_SELECTED_PRODUCT} from '../constants';

const defaultState = {
    selectedProduct: null
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case SET_SELECTED_PRODUCT:
            return {
                ...state,
                selectedProduct: payload
            };
    }

    return state;
};
