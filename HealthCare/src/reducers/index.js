import { combineReducers } from 'redux';

import auth from './AuthReducer';
import registration from './RegistrationReducer';

export default combineReducers({
    auth, registration
});
