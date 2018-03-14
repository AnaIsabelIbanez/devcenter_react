import {SET_CURRENT_SORT, SET_DATA} from '../constants';

const setData = (state, payload) => {
    const {meta} = payload;
    return {
        ...state,
        data: payload.data.map((data) => ({id: data.id, self: data.links.self, type: data.type, ...data.attributes})),
        meta: {
            ...state.meta,
            currentPage: meta['current-page'],
            totalPages: meta['total-pages'],
            pageSize: meta['page-size'],
            totalResults: meta['total-results']
        },
        links: payload.links
    };
};

const setCurrentSort = (state, payload) => {
    return {
        ...state,
        currentSort: payload
    };
};

export const initialState = {
    data: [],
    currentSort: [],
    meta: {
        currentPage: 1,
        totalPages: 10,
        pageSize: 5,
        totalResults: 0
    },
    links: {}
};

export const tableReducerTypes = (resource) => {
    return {
        [`${SET_DATA}_${resource}`]: setData,
        [`${SET_CURRENT_SORT}_${resource}`]: setCurrentSort
    };
};
