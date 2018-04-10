import { AsyncStorage, Keyboard, Alert } from 'react-native';
import { commonStrings } from '../res';
import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    EMAIL_ERROR,
    PASSWORD_ERROR,
} from './types';
import ManageDB from '../database/ManageDB';
import * as utils from '../Utils';

const manageDatabase = new ManageDB();

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};

export const loginUser = (email, password, callback) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_USER });
        const user = await manageDatabase.loginUser(email, password);
        if (user.length === 1) {
            AsyncStorage.multiSet([
                ['email', email],
                ['password', password]
            ]);
            Keyboard.dismiss();
            loginUserSuccess(dispatch, user);
            callback();
        } else {
            loginUserFail(dispatch);
            Alert.alert(
                commonStrings.appName,
                'Email-id or password is incorrect.');
        }
    } catch (error) {
        console.log(error);
    }
};

const loginUserSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
};

const loginUserFail = (dispatch) => {
    dispatch({
        type: LOGIN_USER_FAIL
    });
};

export const emailAddressError = (text) => {    
    return {
        type: EMAIL_ERROR,
        payload: (!text || !utils.validateEmail(text)) ? 'Please enter your vaild email' : ''
    };    
};

export const passwordError = (text) => {
    return {
        type: PASSWORD_ERROR,
        payload: (!text) ? 'Please enter your password' : ''
    };
};
