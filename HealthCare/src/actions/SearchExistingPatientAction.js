import * as Type from './types';

/* Action creator for managing state of all the fields */

export const existPatientSurnameChanged = (text) => {
    return {
        type: Type.EXIST_PATIENT_SURNAME_CHANGED,
        payload: text
    };
};

export const existPatientFirstnameChanged = (text) => {
    return {
        type: Type.EXIST_PATIENT_FIRSTNAME_CHANGED,
        payload: text
    };
};

export const existPatientLicenceNumberChanged = (text) => {
    return {
        type: Type.EXIST_PATIENT_LICENCENUMBER_CHANGED,
        payload: text
    };
};

export const existPatientEmailChanged = (text) => {
    return {
        type: Type.EXIST_PATIENT_EMAIL_CHANGED,
        payload: text
    };
};

export const existPatientContactChanged = (text) => {
    return {
        type: Type.EXIST_PATIENT_CONTACT_CHANGED,
        payload: text
    };
};
