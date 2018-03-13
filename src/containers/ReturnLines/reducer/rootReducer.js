import { combineReducers } from 'redux';

import list from './list';
import global from '../../common/reducer/general';

export default combineReducers({
    list,
    global
});
