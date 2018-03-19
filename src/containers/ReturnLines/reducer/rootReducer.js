import { combineReducers } from 'redux';

import list from './list';
import detail from './detail';
import global from '../../common/reducer/general';
import fetch from '../../common/reducer/fetch';

export default combineReducers({
    list,
    global,
    detail,
    fetch
});
