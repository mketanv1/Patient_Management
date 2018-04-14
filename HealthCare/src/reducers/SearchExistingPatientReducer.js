import * as Action from '../actions/types';

const INITIAL_STATE = {
    surname: '',
    firstName: '',
    licenseNo: '',
    emailAddress: '',
    contactNo: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Action.EXIST_PATIENT_SURNAME_CHANGED:
            return { ...state, surname: action.payload };
        case Action.EXIST_PATIENT_FIRSTNAME_CHANGED:
            return { ...state, firstName: action.payload };
        case Action.EXIST_PATIENT_LICENCENUMBER_CHANGED:
            return { ...state, licenseNo: action.payload };
        case Action.EXIST_PATIENT_EMAIL_CHANGED:
            return { ...state, emailAddress: action.payload };
        case Action.EXIST_PATIENT_CONTACT_CHANGED:
            return { ...state, contactNo: action.payload };
        default:
            return state;
    }
};
