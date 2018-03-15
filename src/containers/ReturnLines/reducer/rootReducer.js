import { combineReducers } from 'redux';

import list from './list';
import detail from './detail';
import global from '../../common/reducer/general';

export default combineReducers({
    list,
    global,
    detail
});
