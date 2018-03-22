/**
 * Combine all reducers in this file and export the combined reducers.
 */

import {routerReducer} from 'react-router-redux';
import globalReducer from './containers/App/reducer/rootReducer';
import fetchReducer from './containers/common/fetchManage/reducer';
import generalDataReducer from './containers/common/generalData/reducer';
import {combineReducers} from 'redux';

export default function createReducer(injectedReducers) {
    return combineReducers({
        router: routerReducer,
        global: globalReducer,
        fetch: fetchReducer,
        generalData: generalDataReducer,
        ...injectedReducers
    });
}
