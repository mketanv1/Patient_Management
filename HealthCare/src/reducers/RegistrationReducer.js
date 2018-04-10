import * as Action from '../actions/types';

const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    employer: '',
    firstYearOfRegistration: '',
    gender: 'Male',
    category: 'Health Worker',
    role: '',
    loading: false,
    registration: null,
    firstNameError: '',
    lastNameError: '',
    emailError: '',
    passwordTypeError: '',
    confirmPasswordError: '',
    contactError: '',
    employerError: '',
    registrationYearError: '',
    roleError: '',
    checkedPolicy: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Action.FIRSTNAME_CHANGED:
            return { ...state, firstName: action.payload };
        case Action.LASTNAME_CHANGED:
            return { ...state, lastName: action.payload };
        case Action.EMAIL_ADDRESS_CHANGED:
            return { ...state, email: action.payload };
        case Action.SECURE_PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case Action.CONFIRMED_PASSWORD:
            return { ...state, confirmPassword: action.payload };
        case Action.CONTACT_CHANGED:
            return { ...state, contact: action.payload };
        case Action.EMPLOYER_CHANGED:
            return { ...state, employer: action.payload };
        case Action.REGISTRATION_YEAR_CHANGED:
            return { ...state, firstYearOfRegistration: action.payload };
        case Action.GENDER_CHANGED:
            return { ...state, gender: action.payload };
        case Action.CATEGORY_CHANGED:
            return { ...state, category: action.payload };
        case Action.ROLE_CHANGED:
            return { ...state, role: action.payload };
        case Action.USER_REGISTRATION:
            return { ...state, loading: true };
        case Action.USER_REGISTRATION_SUCCESS:
            return { ...state, ...INITIAL_STATE, registration: action.payload };
        case Action.FIRSTNAME_ERROR:
            return { ...state, firstNameError: action.payload, loading: false };
        case Action.LASTNAME_ERROR:
            return { ...state, lastNameError: action.payload, loading: false };
        case Action.EMAIL_ADDRESS_ERROR:
            return { ...state, emailError: action.payload, loading: false };
        case Action.SECURE_PASSWORD_ERROR:
            return { ...state, passwordTypeError: action.payload, loading: false };
        case Action.CONFIRM_PASSWORD_ERROR:
            return { ...state, confirmPasswordError: action.payload, loading: false };
        case Action.CONTACT_ERROR:
            return { ...state, contactError: action.payload, loading: false };
        case Action.EMPLOYER_ERROR:
            return { ...state, employerError: action.payload, loading: false };
        case Action.REGISTRATION_YEAR_ERROR:
            return { ...state, registrationYearError: action.payload, loading: false };
        case Action.ROLE_ERROR:
            return { ...state, roleError: action.payload, loading: false };
        case Action.CHECK_POLICY:
            return { ...state, checkedPolicy: action.payload, loading: false };
        default:
            return state;
    }
};
