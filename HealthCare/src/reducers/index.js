import { combineReducers } from 'redux';

import auth from './AuthReducer';
import registration from './RegistrationReducer';
import newPatient from './NewPatientReducer';
import checkUp from './CheckUpReducer';
import familyPlanning from './FamilyPlanningReducer';
import searchExistingPatient from './SearchExistingPatientReducer';
import pregnant from './PregnantReducer';
import userProfile from './UserProfileReducer';


export default combineReducers({
    auth,
    registration,
    newPatient,
    checkUp,
    familyPlanning,
    searchExistingPatient,
    pregnant,
    userProfile,
});
