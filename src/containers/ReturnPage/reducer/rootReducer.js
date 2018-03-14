import { combineReducers } from 'redux';

import list from './list';
import filters from '../../common/reducer/filters';
import global from '../../common/reducer/general';

export default combineReducers({
    list,
    filters,
    global
});
