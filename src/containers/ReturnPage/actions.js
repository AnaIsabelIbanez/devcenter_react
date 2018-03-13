import {CHANGE_FIELD, LAUNCH_FILTER, CLEAR_FIELDS, GET_INITIAL_DATA_RETURNS} from './constants';

export const launchFilter = () => ({
    type: LAUNCH_FILTER
});

export const changeField = (field) => ({
    type: CHANGE_FIELD,
    payload: field
});

export const clearFields = () => ({
    type: CLEAR_FIELDS
});

export const getInitialData = () =>  ({
    type: GET_INITIAL_DATA_RETURNS
});
