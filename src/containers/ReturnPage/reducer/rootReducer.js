import { combineReducers } from 'redux';

import list from './list';
import filters from './filters';

export default combineReducers({
    list,
    filters
});
