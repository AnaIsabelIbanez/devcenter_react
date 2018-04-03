import {
    SET_GENERAL_LIST
} from './constants';
import * as keys from '../resourcesConstants';

const initialState = {
    [keys.RETURN_TYPES]: [],
    [keys.RETURN_REASONS]: [],
    [keys.RETURN_SUBREASONS]: [],
    [keys.WAREHOUSE_NAMES]: [],
    [keys.COLORS]: [],
    [keys.CATEGORIES]: [],
    [keys.SIZES]: [],
    [keys.BRANDS]: []
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
