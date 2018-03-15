import {SET_DETAIL_RETURN} from '../constants';

const defaultState = {
    detail: {},
    filters: {}
};

export default (state = defaultState, {type, payload}) => {
    switch (type) {
        case SET_DETAIL_RETURN:
            return {
                ...state,
                detail: payload
            };
    }

    return state;
};
