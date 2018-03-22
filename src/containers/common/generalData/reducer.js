import {
    SET_GENERAL_LIST
} from './constants';

const initialState = {
    returnTypes: [],
    returnReasons: [],
    returnSubreasons: [],
    warehouseNames: [],
    colors: [],
    categories: [],
    sizes: [],
    brands: []
};

export default function generalReducer(state = initialState, {type, payload, resource}) {
    switch (type) {
        case SET_GENERAL_LIST:
            return {
                ...state,
                [resource]: payload.list
            };
        default:
            return state;
    }
}

export const setGeneralList = (resource, value) => ({
    type: SET_GENERAL_LIST,
    payload: value,
    resource
});
