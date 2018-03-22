import {GET_INITIAL_DATA_DETAIL_LINE, SET_DETAIL_LINE} from './constants';

export const getInitialData = (id) =>  ({
    type: GET_INITIAL_DATA_DETAIL_LINE,
    payload: id
});

export const setDetailLine = (detailLine) => ({
    type: SET_DETAIL_LINE,
    payload: detailLine
});
