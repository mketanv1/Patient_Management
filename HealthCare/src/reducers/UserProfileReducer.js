import * as Action from '../actions/types';

const INITIAL_STATE = {
    additionalEmail: '',
    qualification: '',
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case Action.ADDITIONAL_EMAIL_CHANGED:
            return { ...state, additionalEmail: action.payload };
        case Action.QUALIFICATION_CHANGED:
            return { ...state, qualification: action.payload };
        default:
            return state;
    }
};
