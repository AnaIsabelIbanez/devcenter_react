import { combineReducers } from 'redux';

import list from './list';
import detail from './detail';
import filters from '../../common/filters/reducer';

export default combineReducers({
    list,
    filters,
    detail
});
