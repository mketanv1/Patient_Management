import * as Type from './types';

/* Action creator for managing state of all the fields */

export const numOfPregnanciesChanged = (text) => {
    return {
        type: Type.NUMBER_OF_PREGNANCIES_CHANGED,
        payload: text
    };
};

export const numOfLiveBirthsChanged = (text) => {
    return {
        type: Type.NUMBER_OF_LIVEBIRTHS_CHANGED,
        payload: text
    };
};

export const contraceptionMethodChanged = (text) => {
    return {
        type: Type.CONTRACEPTION_METHOD_CHANGED,
        payload: text
    };
};

export const doneSTIScreenChanged = (text) => {
    return {
        type: Type.STI_SCREEN_CHANGED,
        payload: text
    };
};
export const additionalNotesChanged = (text) => {
    return {
        type: Type.ADDITIONAL_NOTES_CHANGED,
        payload: text
    };
};
