import {SET_DETAIL_LINE} from '../constants';

const defaultState = {
    detail: {}
};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case SET_DETAIL_LINE:
            return {
                ...state,
                detail: payload
            };
    }

    return state;
};
