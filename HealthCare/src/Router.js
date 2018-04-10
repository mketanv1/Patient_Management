import React from 'react';
import { View, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Icon } from 'native-base';
import Login from './screens/Login';
import Registration from './screens/UserRegistration';
import CountrySelection from './screens/CountrySelection';
import HomeScreen from './screens/HomeScreen';
import Patient from './screens/Patient';
import NewPatient from './screens/NewPatient';
import SearchExistingPatient from './screens/SearchExistingPatient';
import SearchResults from './screens/SearchResults';
import PatientType from './screens/PatientType';
import SickOrInjured from './screens/SickOrInjured';
import UsersList from './screens/UsersList';
import ExistingPatient from './screens/ExistingPatient';
import SyncDataWithServer from './screens/SyncDataWithServer';
import FamilyPlanning from './screens/FamilyPlanning';
import CheckUp from './screens/CheckUp';
import ExistingPatientDetail from './screens/ExistingPatientDetail';


import * as ColorSchema from './res/ColorSchema';

const RouteConfigs = StackNavigator({
  Login: { screen: Login, navigationOptions: { header: null } },
  Registration: {
    screen: Registration,
    navigationOptions: {
      title: 'Registration',
      headerRight: null,
      headerTitleStyle: {
        alignSelf: 'center',
        color: ColorSchema.THEME_COLOR_SIX
      }
    }
  },
  HomeScreen: { screen: HomeScreen, navigationOptions: { title: 'Home', headerLeft: null } },
  HomePatient: { screen: Patient, navigationOptions: { title: 'Patient' } },
  NewPatient: { screen: NewPatient, navigationOptions: { title: 'New Patient' } },
  SearchExistingPatient: {
    screen: SearchExistingPatient,
    navigationOptions: { title: 'Search by', headerRight: null }
  },
  SearchResults: {
    screen: SearchResults,
    navigationOptions: { title: 'Search Results', headerRight: null }
  },
  UsersList: { screen: UsersList, navigationOptions: { title: 'Users List' } },
  Sync: { screen: SyncDataWithServer, navigationOptions: { title: 'Sync', headerRight: null, } },
  CountrySelection: {
    screen: CountrySelection,
    navigationOptions: { title: 'CountrySelection', headerLeft: null }
  },
  ExistingPatient: { screen: ExistingPatient, navigationOptions: { title: 'Patient Detail' } },
  ExistingPatientDetail: {
    screen: ExistingPatientDetail,
    navigationOptions: { title: 'Existing Patient' }
  },
  PatientType: {
    screen: PatientType,
    navigationOptions: {
      title: 'What sort of Patient',
      headerTitleStyle: { alignSelf: 'center', color: ColorSchema.THEME_COLOR_SIX }
    }
  },
  sickOrInjured: { screen: SickOrInjured },
  FamilyPlanning: { screen: FamilyPlanning },
  CheckUp: { screen: CheckUp },
}, {
    headerMode: 'screen',
    navigationOptions: ({ navigation }) => ({
      headerVisible: true,
      headerTitleStyle: { color: ColorSchema.THEME_COLOR_SIX },
      headerTintColor: ColorSchema.THEME_COLOR_THREE,
      headerRight: this.headerIcons(navigation)
    }),
  });

headerIcons = (navigation) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Icon
        name={'md-sync'}
        style={{ paddingRight: 15, marginRight: 5, color: ColorSchema.THEME_COLOR_THREE }}
        onPress={() => navigation.navigate('Sync')}
      />
      <Icon
        name={'md-log-out'}
        style={{ paddingRight: 15, marginRight: 5, color: ColorSchema.THEME_COLOR_THREE }}
        onPress={() => this.logOut(navigation)}
      />
    </View>
  );
};

logOut = (navigation) => {
  const keys = ['email', 'password'];
  AsyncStorage.multiRemove(keys, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Local storage user info removed!');
    }
  });
  navigation.navigate('Login');
  console.log('logOut.....');
};

export default RouteConfigs;
