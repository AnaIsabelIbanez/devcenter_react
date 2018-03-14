import {CHANGE_FIELD, LAUNCH_FILTER, CLEAR_FIELDS} from '../constants';

import {getType} from '../../../utils/utilities';

export const launchFilter = (resource) => ({
    type: getType(LAUNCH_FILTER, resource),
    resource
});

export const changeField = (resource, field) => ({
    type: getType(CHANGE_FIELD, resource),
    payload: field,
    resource
});

export const clearFields = (resource) => ({
    type: getType(CLEAR_FIELDS, resource),
    resource
});
