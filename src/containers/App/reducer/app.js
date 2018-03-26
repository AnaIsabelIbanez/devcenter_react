import {
    CHANGE_TAB
} from '../constants';

const initialState = {
    activeTab: null
};

function appReducer(state = initialState, {type, payload}) {
    switch (type) {
        case CHANGE_TAB:
            return {
                ...state,
                activeTab: payload
            };
        default:
            return state;
    }
}

export default appReducer;
