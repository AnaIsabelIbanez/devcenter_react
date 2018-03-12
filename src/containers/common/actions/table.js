import {
    FETCH_DATA,
    SET_DATA,
    SET_CURRENT_SORT
} from '../constants';

import {getType} from '../../../utils/utilities';

export const fetchData = (resource, queryParams, currentSort) => {
    return {
        type: getType(FETCH_DATA, resource),
        payload: `${queryParams}`,
        meta: currentSort,
        resource
    };
};

export const setData = (products, resource) => ({
    type: getType(SET_DATA, resource),
    payload: products,
    resource
});

export const setCurrentSort = (currentSort, resource) => {
    return {
        type: getType(SET_CURRENT_SORT, resource),
        payload: currentSort,
        resource
    };
};
