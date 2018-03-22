import {CHANGE_FIELD, LAUNCH_FILTER, CLEAR_FIELDS} from './constants';
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
    }

    return state;
};
