import { combineReducers } from 'redux';

import  authenticate  from './authenticate';
import userid from './userid';
import username from './username';
import logs from './logs'

export default combineReducers({
    authenticate,userid,username,logs
})

