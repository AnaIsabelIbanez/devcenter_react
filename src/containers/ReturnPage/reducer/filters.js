import {CHANGE_FIELD, LAUNCH_FILTER, CLEAR_FIELDS} from '../constants';

const defaultState = {
    fields: {}
};

export default (state = defaultState, { type, payload }) => {
    switch (type) {
        case CHANGE_FIELD:
            return {
                ...state,
                fields: {
                    ...state.filters,
                    payload
                }
            };
        case CLEAR_FIELDS: {
            return {
                ...state,
                fields: {}
            };
        }
    }

    return state;
};
