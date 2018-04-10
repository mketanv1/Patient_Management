import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    EMAIL_ERROR,
    PASSWORD_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false,
    user: null,
    emailError: '',
    pwdError: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload };            
        case LOGIN_USER_FAIL:            
            return { ...state, loading: false, emailError: '', pwdError: '' };
        case EMAIL_ERROR:
            return { ...state, emailError: action.payload, loading: false, pwdError: '' };
        case PASSWORD_ERROR:
            return { ...state, pwdError: action.payload, loading: false };        
        default:
            return state;
    }
};
