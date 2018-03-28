import {CHANGE_FIELD, LAUNCH_FILTER, CLEAR_FIELDS, CLEAR_FILTERS} from './constants';
import {clearEmptyValues} from '../../../utils/utilities';

const defaultState = {
    fields: {},
    filters: {}
};

export default (state = defaultState, { type, payload, resource }) => {
    switch (type) {
        case `${CHANGE_FIELD}_${resource}`:
            return {
                ...state,
                fields: {
                    ...state.fields,
                    ...payload
                }
            };
        case `${CLEAR_FIELDS}_${resource}`: {
            return {
                ...state,
                fields: {},
                filters: {}
            };
        };
        case `${LAUNCH_FILTER}_${resource}`: {
            return {
                ...state,
                filters: clearEmptyValues(state.fields)
            };
        };
        case `${CLEAR_FILTERS}_${resource}`: {
            return {
                ...state,
                filters: {}
            };
        };
    }

    return state;
};
