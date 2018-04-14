import * as Type from './types';

/* Action creator for managing state of all the fields */

export const additionalEmailChanged = (text) => {
    return {
        type: Type.ADDITIONAL_EMAIL_CHANGED,
        payload: text
    };
};

export const qualificationChanged = (text) => {
    return {
        type: Type.QUALIFICATION_CHANGED,
        payload: text
    };
};

