import * as Type from './types';
import ManageDB from '../database/ManageDB';
import * as utils from '../Utils';

const manageDatabase = new ManageDB();

/* Action creator for managing state of all the fields */

export const firstNameChanged = (text) => {
    return {
        type: Type.FIRSTNAME_CHANGED,
        payload: text
    };
};

export const lastNameChanged = (text) => {
    return {
        type: Type.LASTNAME_CHANGED,
        payload: text
    };
};

export const emailAddressChanged = (text) => {
    return {
        type: Type.EMAIL_ADDRESS_CHANGED,
        payload: text
    };
};

export const passwordValueChanged = (text) => {
    return {
        type: Type.SECURE_PASSWORD_CHANGED,
        payload: text
    };
};

export const confirmedPasswordChanged = (text) => {
    return {
        type: Type.CONFIRMED_PASSWORD,
        payload: text
    };
};

export const contactChanged = (text) => {
    return {
        type: Type.CONTACT_CHANGED,
        payload: text
    };
};

export const employerChanged = (text) => {
    return {
        type: Type.EMPLOYER_CHANGED,
        payload: text
    };
};

export const registrationYearChanged = (text) => {
    return {
        type: Type.REGISTRATION_YEAR_CHANGED,
        payload: text
    };
};

export const genderChanged = (text) => {
    return {
        type: Type.GENDER_CHANGED,
        payload: text
    };
};

export const categoryChanged = (text) => {
    return {
        type: Type.CATEGORY_CHANGED,
        payload: text
    };
};

export const roleChanged = (text) => {
    return {
        type: Type.ROLE_CHANGED,
        payload: text
    };
};

/* Action creator for handling front-end validation */

export const firstnameError = (text) => {
    return {
        type: Type.FIRSTNAME_ERROR,
        payload: (!text) ? 'Please enter your firstname' : ''
    };
};

export const lastnameError = (text) => {
    return {
        type: Type.LASTNAME_ERROR,
        payload: (!text) ? 'Please enter your lastname' : ''
    };
};

export const emailIdError = (text) => {
    return {
        type: Type.EMAIL_ADDRESS_ERROR,
        payload: (!text || !utils.validateEmail(text)) ? 'Please enter your vaild email' : ''
    };
};

export const securePasswordError = (text) => {
    return {
        type: Type.SECURE_PASSWORD_ERROR,
        payload: (!text) ? 'Please enter your password' : ''
    };
};

export const confirmSecurePasswordError = (password, confirmPassword) => {
    return {
        type: Type.CONFIRM_PASSWORD_ERROR,
        payload: confirmPasswordMatch(password, confirmPassword)
    };
};

export const contactNumberError = (text) => {
    return {
        type: Type.CONTACT_ERROR,
        payload: (!text) ? 'Please enter your phone number' : ''
    };
};

export const employerNameError = (text) => {
    return {
        type: Type.EMPLOYER_ERROR,
        payload: (!text) ? 'Please enter your employer' : ''
    };
};

export const registerYearError = (text) => {
    return {
        type: Type.REGISTRATION_YEAR_ERROR,
        payload: (!text) ? 'Please enter your registration year' : ''
    };
};

export const categoryRoleError = (text) => {
    return {
        type: Type.ROLE_ERROR,
        payload: (!text) ? 'Please select your role' : ''
    };
};

/* Action creator for handling button click */

export const userRegistration = (firstName, lastName, email, password,
    contact, employer, firstYearOfRegistration, gender, category, role, callback) =>
    async (dispatch) => {
        try {
            dispatch({ type: Type.USER_REGISTRATION });
            const registration = await manageDatabase.AddUser(
                firstName, lastName, email, password, contact,
                employer, firstYearOfRegistration, gender, category, role);
            if (registration) {
                userRegistrationSuccess(dispatch, registration);
                callback();
            } else {
                userRegistrationFail(dispatch);
            }
        } catch (error) {
            console.log(error);
        }
    };

const userRegistrationSuccess = (dispatch, user) => {
    dispatch({
        type: Type.USER_REGISTRATION_SUCCESS,
        payload: user
    });
};

const userRegistrationFail = (dispatch) => {
    dispatch({
        type: Type.USER_REGISTRATION_FAIL
    });
};

const confirmPasswordMatch = (password, confirmPassword) => {
    if (!confirmPassword) {
        return 'Please enter your confirm password';
    } else if (confirmPassword !== password) {
        return 'Password and Confirm Password must be same';
    } else {
        return '';
    }
};

export const checkPolicy = (isChecked) => {
    return {
        type: Type.CHECK_POLICY,
        payload: isChecked
    };
};
