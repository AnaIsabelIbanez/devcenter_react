import {CHANGE_FIELD, LAUNCH_FILTER, CLEAR_FIELDS} from './constants';

export const launchFilter = (filters) => ({
    type: LAUNCH_FILTER,
    payload: filters
});

export const changeField = (field) => ({
    type: CHANGE_FIELD,
    payload: field
});

export const clearFields = (filters) => ({
    type: CLEAR_FIELDS,
    payload: filters
});
