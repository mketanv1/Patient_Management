import * as Action from '../actions/types';

const INITIAL_STATE = {
    patientFirstname: '',
    patientMiddleName: '',
    patientLastname: '',
    provineHolder: '',
    cityHolder: '',
    patientAddress: '',
    dateOfBirth: '',
    dateHolder: null,
    patientGender: 'Male',
    patientMaritalStatus: 'Single',
    patientEmailAddress: '',
    patientContact: '',
    patientImage: null,
    licenceNumber: '',
    bloodType: '',
    notes: '',
    loading: false,
    patientFirstnameErr: '',
    patientMiddlenameErr: '',
    patientLastnameErr: '',
    patientProvinceErr: '',
    patientCityErr: '',
    patientAddressErr: '',
    patientDOBErr: '',
    patientEmailErr: '',
    patientContactErr: '',
    patientImageErr: '',
    patientLicenceNumberErr: '',
    patientBloodTypeErr: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Action.PATIENT_FIRSTNAME_CHANGED:
            return { ...state, patientFirstname: action.payload };
        case Action.PATIENT_MIDDLENAME_CHANGED:
            return { ...state, patientMiddleName: action.payload };
        case Action.PATIENT_LASTNAME_CHANGED:
            return { ...state, patientLastname: action.payload };
        case Action.PATIENT_PROVINCE_CHANGED:
            return { ...state, provineHolder: action.payload };
        case Action.PATIENT_CITY_CHANGED:
            return { ...state, cityHolder: action.payload };
        case Action.PATIENT_ADDRESS_CHANGED:
            return { ...state, patientAddress: action.payload };
        case Action.PATIENT_DOB_CHANGED:
            return { ...state, dateOfBirth: action.payload };
        case Action.PATIENT_GENDER_CHANGED:
            return { ...state, patientGender: action.payload };
        case Action.PATIENT_MARITAL_STATUS_CHANGED:
            return { ...state, patientMaritalStatus: action.payload };
        case Action.PATIENT_EMAIL_CHANGED:
            return { ...state, patientEmailAddress: action.payload };
        case Action.PATIENT_CONTACT_CHANGED:
            return { ...state, patientContact: action.payload };
        case Action.PATIENT_IMAGE_CHANGED:
            return { ...state, patientImage: action.payload };
        case Action.PATIENT_LICENCE_NUMBER_CHANGED:
            return { ...state, licenceNumber: action.payload };
        case Action.PATIENT_BLOOD_TYPE_CHANGED:
            return { ...state, bloodType: action.payload };
        case Action.PATIENT_NOTES_CHANGED:
            return { ...state, notes: action.payload };
        case Action.PATIENT_FIRSTNAME_ERROR:
            return { ...state, patientFirstnameErr: action.payload, loading: false };
        case Action.PATIENT_MIDDLENAME_ERROR:
            return { ...state, patientMiddlenameErr: action.payload, loading: false };
        case Action.PATIENT_LASTNAME_ERROR:
            return { ...state, patientLastnameErr: action.payload, loading: false };
        case Action.PATIENT_PROVINCE_ERROR:
            return { ...state, patientProvinceErr: action.payload, loading: false };
        case Action.PATIENT_CITY_ERROR:
            return { ...state, patientCityErr: action.payload, loading: false };
        case Action.PATIENT_ADDRESS_ERROR:
            return { ...state, patientAddressErr: action.payload, loading: false };
        case Action.PATIENT_DOB_ERROR:
            return { ...state, patientDOBErr: action.payload, loading: false };
        case Action.PATIENT_EMAIL_ERROR:
            return { ...state, patientEmailErr: action.payload, loading: false };
        case Action.PATIENT_CONTACT_ERROR:
            return { ...state, patientContactErr: action.payload, loading: false };
        case Action.PATIENT_IMAGE_ERROR:
            return { ...state, patientImageErr: action.payload, loading: false };
        case Action.PATIENT_LICENCE_NUMBER_ERROR:
            return { ...state, patientLicenceNumberErr: action.payload, loading: false };
        case Action.PATIENT_BLOOD_TYPE_ERROR:
            return { ...state, patientBloodTypeErr: action.payload, loading: false };
        default:
            return state;
    }
};
