import {GET_INITIAL_DATA_LINES, CHANGE_ATTRIBUTE_TABLE, SET_ATTRIBUTE_TABLE} from './constants';

export const getInitialData = () =>  ({
    type: GET_INITIAL_DATA_LINES
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
