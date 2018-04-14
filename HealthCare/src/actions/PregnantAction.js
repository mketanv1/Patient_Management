import * as Type from './types';

/* Action creator for managing state of all the fields */

export const numOfPrevPregnanciesChanged = (text) => {
    return {
        type: Type.NUMBER_OF_PREV_PREGNANCIES_CHANGED,
        payload: text
    };
};

export const numOfPrevLiveBirthsChanged = (text) => {
    return {
        type: Type.NUMBER_OF_PREV_LIVEBIRTHS_CHANGED,
        payload: text
    };
};

export const numOfCSectionsChanged = (text) => {
    return {
        type: Type.NUMBER_OF_C_SECTIONS_CHANGED,
        payload: text
    };
};

export const numOfVaginalBirthsChanged = (text) => {
    return {
        type: Type.NUMBER_OF_VEGINAL_BIRTHS_CHANGED,
        payload: text
    };
};

export const weightTestChanged = (text) => {
    return {
        type: Type.WEIGHT_TEST_CHANGED,
        payload: text
    };
};

export const bloodPressureTestChanged = (text) => {
    return {
        type: Type.BLOOD_PRESSURE_TEST_CHANGED,
        payload: text
    };
};

export const heartRateTestChanged = (text) => {
    return {
        type: Type.HEART_RATE_TEST_CHANGED,
        payload: text
    };
};

export const bloodGlucoseTestChanged = (text) => {
    return {
        type: Type.BLOOD_GLUCOSE_TEST_CHANGED,
        payload: text
    };
};

export const glucoseToleranceTestChanged = (text) => {
    return {
        type: Type.GLUCOSE_TOLERANCE_TEST_CHANGED,
        payload: text
    };
};

export const fundalHeightChanged = (text) => {
    return {
        type: Type.FUNDAL_HEIGHT_CHANGED,
        payload: text
    };
};

export const fetalHeartbeatChanged = (text) => {
    return {
        type: Type.FETAL_HEARTBEAT_CHANGED,
        payload: text
    };
};

export const urineProteinChanged = (text) => {
    return {
        type: Type.URINE_PROTEIN_CHANGED,
        payload: text
    };
};

export const urineGlucoseChanged = (text) => {
    return {
        type: Type.URINE_GLUCOSE_CHANGED,
        payload: text
    };
};

export const anyOtherSymptomsChanged = (text) => {    
    return {
        type: Type.ANY_OTHER_SYMPTOMS_CHANGED,
        payload: text
    };
}; 

export const tetanusVaccineChanged = (text) => {
    return {
        type: Type.TETANUS_VACCINE_CHANGED,
        payload: text
    };
};

export const otherNotesChanged = (text) => {
    return {
        type: Type.OTHER_NOTES_CHANGED,
        payload: text
    };
};
