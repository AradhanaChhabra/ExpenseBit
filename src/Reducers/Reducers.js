import { combineReducers } from 'redux';

import  authenticate  from './authenticate';
import userid from './userid';
import username from './username'

export default combineReducers({
    authenticate,userid,username
})

