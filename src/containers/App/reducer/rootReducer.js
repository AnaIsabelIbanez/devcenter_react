import { combineReducers } from 'redux';

import user from './user';
import modal from './modal';
import app from './app';

export default combineReducers({
    user,
    modal,
    app
});
