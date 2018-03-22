import { combineReducers } from 'redux';

import list from './list';
import detail from './detail';
import filters from '../../common/filters/reducer';
// import global from '../../common/reducer/general';
// import fetch from '../../common/reducer/fetch';

export default combineReducers({
    list,
    filters,
    // global,
    // fetch,
    detail
});
