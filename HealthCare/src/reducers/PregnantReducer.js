import * as Action from '../actions/types';

const INITIAL_STATE = {
    numOfPrevPregnancies: '',
    numOfPrevLivebirths: '',
    numOfCsections: '',
    numOfVeginalBirths: '',
    weight: '',
    bloodPressure: '',
    heartRate: '',
    bloodGlucoseTest: '',
    glucoseToleranceTest: 'Ok',
    fundalHeight: '',
    fetalHeartbeat: 'Yes',
    urineProtein: '',
    urineGlucose: '',
    anyOtherSymptoms: '',
    tetanusVaccine: 'Yes',
    otherNotes: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {    
    switch (action.type) {
        case Action.NUMBER_OF_PREV_PREGNANCIES_CHANGED:
            return { ...state, numOfPrevPregnancies: action.payload };
        case Action.NUMBER_OF_PREV_LIVEBIRTHS_CHANGED:
            return { ...state, numOfPrevLivebirths: action.payload };
        case Action.NUMBER_OF_C_SECTIONS_CHANGED:
            return { ...state, numOfCsections: action.payload };
        case Action.NUMBER_OF_VEGINAL_BIRTHS_CHANGED:
            return { ...state, numOfVeginalBirths: action.payload };
        case Action.WEIGHT_TEST_CHANGED:
            return { ...state, weight: action.payload };
        case Action.BLOOD_PRESSURE_TEST_CHANGED:
            return { ...state, bloodPressure: action.payload };
        case Action.HEART_RATE_TEST_CHANGED:
            return { ...state, heartRate: action.payload };
        case Action.BLOOD_GLUCOSE_TEST_CHANGED:
            return { ...state, bloodGlucoseTest: action.payload };
        case Action.GLUCOSE_TOLERANCE_TEST_CHANGED:
            return { ...state, glucoseToleranceTest: action.payload };
        case Action.FUNDAL_HEIGHT_CHANGED:
            return { ...state, fundalHeight: action.payload };
        case Action.FETAL_HEARTBEAT_CHANGED:
            return { ...state, fetalHeartbeat: action.payload };
        case Action.URINE_PROTEIN_CHANGED:
            return { ...state, urineProtein: action.payload };
        case Action.URINE_GLUCOSE_CHANGED:
            return { ...state, urineGlucose: action.payload };
        case Action.ANY_OTHER_SYMPTOMS_CHANGED:            
            return { ...state, anyOtherSymptoms: action.payload };
        case Action.TETANUS_VACCINE_CHANGED:
            return { ...state, tetanusVaccine: action.payload };
        case Action.OTHER_NOTES_CHANGED:
            return { ...state, otherNotes: action.payload };
        default:
            return state;
    }
};
