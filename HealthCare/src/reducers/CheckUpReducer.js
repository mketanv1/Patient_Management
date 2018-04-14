import * as Action from '../actions/types';

const INITIAL_STATE = {
    bloodPressure: '',
    heartRate: '',
    weight: '',
    waistCircumference: '',
    SpO2: '',
    fev: '',
    cholesterol: '',
    bloodGlucose: '',
    otherTest: '',
    notes: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Action.BLOOD_PRESSURE_CHANGED:
            return { ...state, bloodPressure: action.payload };
        case Action.HEART_RATE_CHANGED:
            return { ...state, heartRate: action.payload };
        case Action.WEIGHT_CHANGED:
            return { ...state, weight: action.payload };
        case Action.WAISTCIRCUMFERENCE_CHANGED:
            return { ...state, waistCircumference: action.payload };
        case Action.SPO2_CHANGED:
            return { ...state, SpO2: action.payload };
        case Action.FEV_CHANGED:
            return { ...state, fev: action.payload };
        case Action.CHOLESTEROL_CHANGED:
            return { ...state, cholesterol: action.payload };
        case Action.BLOODGLUCOSE_CHANGED:
            return { ...state, bloodGlucose: action.payload };
        case Action.OTHERTEST_CHANGED:
            return { ...state, otherTest: action.payload };
        case Action.NOTES_CHANGED:
            return { ...state, notes: action.payload };
        default:
            return state;
    }
};
