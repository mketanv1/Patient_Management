import * as Type from './types';

/* Action creator for managing state of all the fields */

export const bloodPressureChanged = (text) => {
    return {
        type: Type.BLOOD_PRESSURE_CHANGED,
        payload: text
    };
};

export const heartRateChanged = (text) => {
    return {
        type: Type.HEART_RATE_CHANGED,
        payload: text
    };
};

export const weightChanged = (text) => {
    return {
        type: Type.WEIGHT_CHANGED,
        payload: text
    };
};

export const waistCircumferenceChanged = (text) => {
    return {
        type: Type.WAISTCIRCUMFERENCE_CHANGED,
        payload: text
    };
};

export const spoChanged = (text) => {
    return {
        type: Type.SPO2_CHANGED,
        payload: text
    };
};

export const fevChanged = (text) => {
    return {
        type: Type.FEV_CHANGED,
        payload: text
    };
};

export const cholesterolChanged = (text) => {
    return {
        type: Type.CHOLESTEROL_CHANGED,
        payload: text
    };
};

export const bloodGlucoseChanged = (text) => {
    return {
        type: Type.BLOODGLUCOSE_CHANGED,
        payload: text
    };
};

export const otherTestChanged = (text) => {
    return {
        type: Type.OTHERTEST_CHANGED,
        payload: text
    };
};

export const notesChanged = (text) => {
    return {
        type: Type.NOTES_CHANGED,
        payload: text
    };
};
