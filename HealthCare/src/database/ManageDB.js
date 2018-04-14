import { Component } from 'react';
import base64 from 'base-64';

export const Realm = require('realm');

// Define your models and their properties
const User = {
    name: 'User',
    properties: {
        user_id: 'string',
        first_name: 'string',
        last_name: 'string',
        email_address: 'string',
        password: 'string',
        phone_number: 'string',
        employer_name: 'string',
        registration_year: 'string',
        selected_gender: 'string',
        selected_category: 'string',
        role: 'int',
    }
};

const Country = {
    name: 'Country',
    properties: {
        country_code: 'string',
        country_name: 'string',
        is_accessible: 'bool',
    }
};

const Patient = {
    name: 'Patient',
    properties: {
        patient_id: 'int',
        first_name: 'string',
        middle_name: 'string',
        last_name: 'string',
        province: 'int',
        city: 'int',
        address: 'string',
        birth_date: 'date', //Optional
        gender: 'string',
        marital_status: 'string',
        // marital_status: { type: 'string', optional: true },        
        email_id: 'string',
        contact_no: 'string',
        photo: 'string',
        // thumb_print: 'string',
        license_no: 'string',
        blood_group: 'string',
        notes: 'string',
    }
};

const realm = new Realm({ schema: [User, Country, Patient] });

export default class ManageDB extends Component {

    getAllUsers() {
        const allUsers = realm.objects('User');
        return allUsers;
    }

    getCountriesList() {
        const response = realm.objects('Country');
        if (response.length === 0) {
            const countries = ['Demo Land', 'Cook Islands', 'Kiribati', 'Samoa',
                'Solomon Islands', 'Timor-Leste', 'Tolelau',
                'Tonga', 'Vanuatu'];
            for (let i = 1; i <= countries.length; i++) {
                const code = 'code' + i;
                const country = countries[i - 1];
                const isAccessible = (i === 1 ? true : false);
                this.createCountries(code, country, isAccessible);
            }
        }

        console.log('Countries:', realm.objects('Country'));
        return realm.objects('Country');
    }

    createCountries(code, country, isAccessible) {
        realm.write(() => {
            realm.create('Country', {
                country_code: code,
                country_name: country,
                is_accessible: isAccessible,
            });
        });
        console.log('Total number of Country =>:', realm.objects('Country').length);
    }

    loginUser(emailID, password) {
        let allUsers = realm.objects('User');
        const query = 'email_address = "' + emailID + '" AND password = "' + password + '"';
        console.log('Query: ', query);
        const result = realm.objects('User').filtered(query);
        console.log('USERS::==> ', result);
        return result;
    }

    AddUser(firstName, lastName, email, password, phoneNumber, employer,
        firstYearOfRegistration, selectedGender, selectedCategory, role) {
        try {
            realm.write(() => {
                realm.create('User', {
                    user_id: '1',
                    first_name: firstName,
                    last_name: lastName,
                    email_address: email,
                    password,
                    phone_number: phoneNumber,
                    employer_name: employer,
                    registration_year: firstYearOfRegistration,
                    selected_gender: selectedGender,
                    selected_category: selectedCategory,
                    role,
                });
            });
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    AddPatient(patientFirstname, patientMiddleName, patientLastname, provineHolder, cityHolder,
        patientAddress, dateOfBirth, patientGender, patientMaritalStatus, patientEmailAddress,
        patientContact, patientImage, licenceNumber, bloodType, notes
    ) {
        // const encoded = base64.decode(patientImage);

        try {
            realm.write(() => {
                realm.create('Patient', {
                    patient_id: 1,
                    first_name: patientFirstname,
                    middle_name: patientMiddleName,
                    last_name: patientLastname,
                    province: provineHolder,
                    city: cityHolder,
                    address: patientAddress,
                    birth_date: dateOfBirth,
                    gender: patientGender,
                    marital_status: patientMaritalStatus,
                    email_id: patientEmailAddress,
                    contact_no: patientContact,
                    photo: patientImage,
                    license_no: licenceNumber,
                    blood_group: bloodType,
                    notes,
                });
            });
        } catch (error) {
            console.log('Patient Error-->', error);
            return false;
        }
    }

    getAllNewPatient() {
        const getNewPatient = realm.objects('Patient');
        return getNewPatient;
    }

    render() {
        return null;
    }
}
