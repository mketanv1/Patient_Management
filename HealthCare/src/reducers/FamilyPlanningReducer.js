import * as Action from '../actions/types';

const INITIAL_STATE = {
    numOfPregnancies: '',
    numOfLiveBirths: '',
    contraceptionMethod: '',
    doneSTIScreen: 'Yes',
    additionalNotes: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Action.NUMBER_OF_PREGNANCIES_CHANGED:
            return { ...state, numOfPregnancies: action.payload };
        case Action.NUMBER_OF_LIVEBIRTHS_CHANGED:
            return { ...state, numOfLiveBirths: action.payload };
        case Action.CONTRACEPTION_METHOD_CHANGED:
            return { ...state, contraceptionMethod: action.payload };
        case Action.STI_SCREEN_CHANGED:
            return { ...state, doneSTIScreen: action.payload };
        case Action.ADDITIONAL_NOTES_CHANGED:
            return { ...state, additionalNotes: action.payload };
        default:
            return state;
    }
};
