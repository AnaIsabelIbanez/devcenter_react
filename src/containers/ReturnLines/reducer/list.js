import {tableReducerTypes, initialState} from '../../common/table/reducerTypes';
import {SET_ATTRIBUTE_TABLE, KEY_LINE_RESOURCE} from '../constants';


const changeAttributeTable = (state, {data}) => {
    const copyDataList = [...state.data];
    let element = copyDataList.find((elem) => elem.id === data.id);
    element = {id: data.id, self: data.self, type: data.type, ...data.attributes};
    return {
        ...state,
        data: copyDataList
    };
};

const customActions = {
    ...tableReducerTypes(KEY_LINE_RESOURCE),
    [`${SET_ATTRIBUTE_TABLE}`]: changeAttributeTable
};

function ReturnLinesReducer(state = initialState, {type, payload}) {
    const actions = customActions;
    const action = actions[type];
    return action ? action(state, payload) : state;
}

export default ReturnLinesReducer;
