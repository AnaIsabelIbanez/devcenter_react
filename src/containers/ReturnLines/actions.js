import {GET_INITIAL_DATA_LINES, CHANGE_ATTRIBUTE_TABLE, SET_ATTRIBUTE_TABLE, SET_DETAIL_RETURN} from './constants';

export const getInitialData = (id) =>  ({
    type: GET_INITIAL_DATA_LINES,
    payload: id
});

export const changeAttributeTable = (attrChanged, dataRow) => {
    console.log('dataRow', dataRow);
    return ({
        type: CHANGE_ATTRIBUTE_TABLE,
        payload: {attrChanged, dataRow}
    });};

export const setAttributeTable = (changedElement) => ({
    type: SET_ATTRIBUTE_TABLE,
    payload: changedElement
});

export const setDetailReturn = (detailReturn) => ({
    type: SET_DETAIL_RETURN,
    payload: detailReturn
});
