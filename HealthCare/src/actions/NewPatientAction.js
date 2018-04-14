import * as Type from './types';
import * as utils from '../Utils';

/* Action creator for managing state of all the fields */
export const patientFirstnameChanged = (text) => {
    return {
        type: Type.PATIENT_FIRSTNAME_CHANGED,
        payload: text
    };
};

export const patientMiddlenameChanged = (text) => {
    return {
        type: Type.PATIENT_MIDDLENAME_CHANGED,
        payload: text
    };
};

export const patientLastnameChanged = (text) => {
    return {
        type: Type.PATIENT_LASTNAME_CHANGED,
        payload: text
    };
};

export const patientProvinceChanged = (text) => {
    return {
        type: Type.PATIENT_PROVINCE_CHANGED,
        payload: text
    };
};

export const patientCityChanged = (text) => {
    return {
        type: Type.PATIENT_CITY_CHANGED,
        payload: text
    };
};

export const patientAddressChanged = (text) => {
    return {
        type: Type.PATIENT_ADDRESS_CHANGED,
        payload: text
    };
};

export const patientDOBChanged = (text) => {
    return {
        type: Type.PATIENT_DOB_CHANGED,
        payload: text
    };
};

export const patientDateHolder = (text) => {
    return {
        type: Type.PATIENT_DATE_HOLDER,
        payload: text
    };
};

export const patientGenderChanged = (text) => {
    return {
        type: Type.PATIENT_GENDER_CHANGED,
        payload: text
    };
};

export const patientMaritalStatusChanged = (text) => {
    return {
        type: Type.PATIENT_MARITAL_STATUS_CHANGED,
        payload: text
    };
};

export const patientEmailChanged = (text) => {
    return {
        type: Type.PATIENT_EMAIL_CHANGED,
        payload: text
    };
};

export const patientContactChanged = (text) => {
    return {
        type: Type.PATIENT_CONTACT_CHANGED,
        payload: text
    };
};

export const patientImageChanged = (text) => {
    return {
        type: Type.PATIENT_IMAGE_CHANGED,
        payload: text
    };
};

export const patientLicenceNumberChanged = (text) => {
    return {
        type: Type.PATIENT_LICENCE_NUMBER_CHANGED,
        payload: text
    };
};

export const patientBloodTypeChanged = (text) => {
    return {
        type: Type.PATIENT_BLOOD_TYPE_CHANGED,
        payload: text
    };
};

export const patientNotesChanged = (text) => {
    return {
        type: Type.PATIENT_NOTES_CHANGED,
        payload: text
    };
};

/* Action creator for handling front-end validation */

export const patientFirstnameError = (text) => {
    return {
        type: Type.PATIENT_FIRSTNAME_ERROR,
        payload: (!text) ? 'Please enter your firstname' : ''
    };
};

export const patientMiddlenameError = (text) => {
    return {
        type: Type.PATIENT_MIDDLENAME_ERROR,
        payload: (!text) ? 'Please enter your middlename' : ''
    };
};

export const patientLastnameError = (text) => {
    return {
        type: Type.PATIENT_LASTNAME_ERROR,
        payload: (!text) ? 'Please enter your lastname' : ''
    };
};

export const patientProvinceError = (text) => {
    return {
        type: Type.PATIENT_PROVINCE_ERROR,
        payload: (!text) ? 'Please select your province' : ''
    };
};

export const patientCityError = (text) => {
    return {
        type: Type.PATIENT_CITY_ERROR,
        payload: (!text) ? 'Please select your city' : ''
    };
};

export const patientAddressError = (text) => {
    return {
        type: Type.PATIENT_ADDRESS_ERROR,
        payload: (!text) ? 'Please enter your address' : ''
    };
};

export const patientDOBError = (text) => {
    return {
        type: Type.PATIENT_DOB_ERROR,
        payload: (!text) ? 'Please select your birth date' : ''
    };
};

export const patientEmailError = (text) => {
    return {
        type: Type.PATIENT_EMAIL_ERROR,
        payload: (!text || !utils.validateEmail(text)) ? 'Please enter your vaild email' : ''
    };
};

export const patientContactError = (text) => {
    return {
        type: Type.PATIENT_CONTACT_ERROR,
        payload: (!text) ? 'Please enter your contact number' : ''
    };
};

export const patientImageError = (text) => {
    return {
        type: Type.PATIENT_IMAGE_ERROR,
        payload: (!text) ? 'Please select your image' : ''
    };
};

export const patientLicenceNumberError = (text) => {
    return {
        type: Type.PATIENT_LICENCE_NUMBER_ERROR,
        payload: (!text) ? 'Please enter your licence number' : ''
    };
};

export const patientBloodTypeError = (text) => {
    return {
        type: Type.PATIENT_BLOOD_TYPE_ERROR,
        payload: (!text) ? 'Please enter your blood type' : ''
    };
};
