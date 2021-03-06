import {SET_USER, HIDE_MODAL, SHOW_MODAL, CHANGE_TAB} from './constants';

export const setUser = user => {
    return {
        type: SET_USER,
        payload: user
    };
};

export const showModal = (options) => {
    return {
        type: SHOW_MODAL,
        payload: options
    };
};

export const showError = ({parsedBody: { type, details = [] }, message}) => {
    return showModal({
        title: 'Error ocurred',
        message: message || 'Something went wrong, please try again',
        details: details,
        type:'error'
    });
};

export const hideModal = () => {
    return {
        type: HIDE_MODAL
    };
};

export const changeActiveTab = (activeTab) => {
    return {
        type: CHANGE_TAB,
        payload: activeTab
    };
};
