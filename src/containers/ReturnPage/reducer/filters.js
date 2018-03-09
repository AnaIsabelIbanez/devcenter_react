import {CHANGE_FIELD, LAUNCH_FILTER, CLEAR_FIELDS} from '../constants';
import {clearEmptyValues} from '../../../utils/utilities';

const defaultState = {
    fields: {},
    filters: {}
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case CHANGE_FIELD:
            return {
                ...state,
                fields: {
                    ...state.fields,
                    ...payload
                }
            };
        case CLEAR_FIELDS: {
            return {
                ...state,
                fields: {},
                filters: {}
            };
        };
        case LAUNCH_FILTER: {
            const a = clearEmptyValues(state.fields);
            console.log('a', a);
            return {
                ...state,
                filters: clearEmptyValues(state.fields)
            };
        };
    }

    return state;
};
