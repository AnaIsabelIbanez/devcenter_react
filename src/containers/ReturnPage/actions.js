import {CHANGE_FIELD, LAUNCH_FILTER, CLEAR_FIELDS} from './constants';

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
