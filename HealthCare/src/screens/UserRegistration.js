import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Keyboard,
    ActivityIndicator,
    Alert
} from 'react-native';
import { connect } from 'react-redux';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { TextField } from 'react-native-material-textfield';
import { ListItem, CheckBox, Picker, StyleProvider } from 'native-base';
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';
import { styles, commonStrings } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';
import * as actions from '../actions';
import * as utils from '../Utils';


class UserRegistration extends Component {

    constructor(props) {
        super(props);
        this.onSelect = this.onSelect.bind(this);
        this.onSelectedCategory = this.onSelectedCategory.bind(this);
    }

    /**
     * Calling  RadioButton
     */
    onSelect(index, value) {
        this.props.genderChanged(`${value}`);
    }

    onSelectedCategory(index, value) {
        this.props.categoryChanged(`${value}`);
    }

    /**
     * submit registration from onClick
     */
    onSubmit = () => {
        const {
            firstName, lastName, email, password, confirmPassword, contact, employer,
            firstYearOfRegistration, gender, category, role,
            firstnameError, lastnameError, emailIdError, securePasswordError,
            confirmSecurePasswordError, contactNumberError, employerNameError,
            registerYearError, categoryRoleError, checkedPolicy, checkPolicy
        } = this.props;

        if (!firstName || !lastName || !email || !password || !contact || !confirmPassword ||
            !employer || !firstYearOfRegistration || !role || !utils.validateEmail(email) ||
            (confirmPassword !== password)) {
            firstnameError(firstName);
            lastnameError(lastName);
            emailIdError(email);
            securePasswordError(password);
            confirmSecurePasswordError(password, confirmPassword);
            contactNumberError(contact);
            employerNameError(employer);
            registerYearError(firstYearOfRegistration);
            categoryRoleError(role);
            checkPolicy(checkedPolicy);
        } else if (!checkedPolicy) {
            Alert.alert(commonStrings.appName, 'Please agree with our terms and condition.');
        } else {
            this.props.userRegistration(
                firstName,
                lastName,
                email,
                password,
                contact,
                employer,
                firstYearOfRegistration,
                gender,
                category,
                role,
                () => {
                    this.props.navigation.navigate('Login');
                });
            Keyboard.dismiss();
        }
    }

    getRoles() {
        const selectedCategory = this.props.category;
        if (selectedCategory === 'Health Worker') {
            return ['Select', 'Student', 'Untrained Volunteer', 'Community Health Worker'];
        } else if (selectedCategory === 'Allied Health') {
            return ['Select', 'Pharmacist', 'Pharmacy Officer', 'Dentist',
                'Physiotherapist', 'Speech Pathologist', 'Dietician',
                'Occupational Therapist', 'Other'];
        } else if (selectedCategory === 'Nurse') {
            return ['Select', 'Nurse Aide', 'Registered Nurse', 'Nurse Practitioner', 'Midwife'];
        } else if (selectedCategory === 'Doctor') {
            return ['Select', 'Intern', 'Resident', 'Registrar', 'GP', 'Surgeon',
                'Other Specialist'];
        } else {
            return ['Select'];
        }
    }

    myFocusFunction = () => {
        this.refs.scrollView.scrollTo({ y: 0 });
    }

    renderButton() {
        if (this.props.loading) {
            return <ActivityIndicator size="large" color={ColorSchema.THEME_COLOR_ONE} />;
        }

        return (
            <Button
                btnStyle={[stylesSheet.buttonContainer, { width: '60%' }]}
                title="Create Account"
                onPress={() => this.onSubmit()}
            >
                CREATE ACCOUNT
            </Button>
        );
    }


    render() {
        const { text } = stylesSheet;
        const options = this.getRoles();

        return (
            <ScrollView
                overScrollMode='always'
                ref='scrollView'
            >
                <View style={[styles.container, { paddingBottom: 0 }]}>

                    <TextField
                        ref={'firstName'}
                        label='First Name'
                        value={this.props.firstName}
                        onChangeText={(firstName) => this.props.firstNameChanged(firstName)}
                        onFocus={this.myFocusFunction}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        onSubmitEditing={() => { this.refs.lastName.focus(); }}
                        returnKeyType='next'
                        error={this.props.firstNameError}
                    />

                    <TextField
                        ref={'lastName'}
                        label='Last Name'
                        value={this.props.lastName}
                        onChangeText={(lastName) => this.props.lastNameChanged(lastName)}
                        onFocus={this.myFocusFunction}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        onSubmitEditing={() => { this.refs.email.focus(); }}
                        returnKeyType='next'
                        error={this.props.lastNameError}
                    />

                    <TextField
                        ref={'email'}
                        label='Email Address'
                        value={this.props.email}
                        onChangeText={(email) => this.props.emailAddressChanged(email)}
                        onFocus={this.myFocusFunction}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType='email-address'
                        onSubmitEditing={() => { this.refs.password.focus(); }}
                        returnKeyType='next'
                        error={this.props.emailError}
                    />

                    <TextField
                        ref={'password'}
                        label='Password'
                        value={this.props.password}
                        onChangeText={(password) => this.props.passwordValueChanged(password)}
                        onFocus={this.myFocusFunction}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        secureTextEntry={true}
                        onSubmitEditing={() => { this.refs.confirmPassword.focus(); }}
                        returnKeyType='next'
                        error={this.props.passwordTypeError}
                    />

                    <TextField
                        ref={'confirmPassword'}
                        label='Confirm Password'
                        value={this.props.confirmPassword}
                        onChangeText={(confirmPassword) =>
                            this.props.confirmedPasswordChanged(confirmPassword)}
                        onFocus={this.myFocusFunction}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        secureTextEntry={true}
                        onSubmitEditing={() => { this.refs.contact.focus(); }}
                        returnKeyType='next'
                        error={this.props.confirmPasswordError}
                    />

                    <TextField
                        ref={'contact'}
                        label='Phone Number'
                        value={this.props.contact}
                        onChangeText={(contact) => this.props.contactChanged(contact)}
                        onFocus={this.myFocusFunction}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        maxLength={10}
                        keyboardType='numeric'
                        onSubmitEditing={() => { this.refs.employer.focus(); }}
                        returnKeyType='next'
                        error={this.props.contactError}
                    />

                    <TextField
                        ref={'employer'}
                        label='Employer'
                        value={this.props.employer}
                        onChangeText={(employer) => this.props.employerChanged(employer)}
                        onFocus={this.myFocusFunction}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        onSubmitEditing={() => { this.refs.registrationYear.focus(); }}
                        returnKeyType='next'
                        error={this.props.employerError}
                    />

                    <TextField
                        ref={'registrationYear'}
                        label='First Year of Registration'
                        value={this.props.firstYearOfRegistration}
                        onChangeText={
                            (firstYearOfRegistration) => this.props.registrationYearChanged(
                                firstYearOfRegistration
                            )
                        }
                        onFocus={this.myFocusFunction}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        maxLength={4}
                        keyboardType='numeric'
                        returnKeyType='next'
                        error={this.props.registrationYearError}
                    />

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.radioHeader]}>Gender :</Text>
                        <RadioGroup
                            style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 5 }}
                            thickness={2}
                            color={ColorSchema.THEME_COLOR_ONE}
                            selectedIndex={0}
                            onSelect={(index, value) => this.onSelect(index, value)}
                        >
                            <RadioButton value={'Male'} >
                                <Text style={styles.radioButtonStyle}>Male</Text>
                            </RadioButton>

                            <RadioButton value={'Female'}>
                                <Text style={styles.radioButtonStyle}>Female</Text>
                            </RadioButton>

                        </RadioGroup>
                    </View>

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.radioHeader]}>Category :</Text>
                        <RadioGroup
                            thickness={2}
                            color={ColorSchema.THEME_COLOR_ONE}
                            selectedIndex={0}
                            onSelect={(index, value) => this.onSelectedCategory(index, value)}
                        >
                            <RadioButton value={'Health Worker'} >
                                <Text style={styles.radioButtonStyle}>Health Worker</Text>
                            </RadioButton>

                            <RadioButton value={'Allied Health'}>
                                <Text style={styles.radioButtonStyle}>Allied Health</Text>
                            </RadioButton>

                            <RadioButton value={'Nurse'}>
                                <Text style={styles.radioButtonStyle}>Nurse</Text>
                            </RadioButton>

                            <RadioButton value={'Doctor'}>
                                <Text style={styles.radioButtonStyle}>Doctor</Text>
                            </RadioButton>
                        </RadioGroup>
                    </View>
                    <View
                        style={{
                            marginTop: 5,
                            borderWidth: 1,
                            borderColor: ColorSchema.INPUT_TEXT_ANIM_COLOR
                        }}
                    >
                        <Picker
                            style={styles.pickerText}
                            mode="dropdown"
                            placeholder="Select One"
                            selectedValue={this.props.role}
                            onValueChange={(role) => this.props.roleChanged(role)}
                        >
                            {options.map((item, index) => {
                                return (<Picker.Item label={item} value={index} key={index} />);
                            })}
                        </Picker>
                    </View>
                    {<Text style={styles.errorTextStyle} >
                        {this.props.roleError}
                    </Text>}
                </View>
                <View style={[styles.container, { padding: 0 }]}>
                    <StyleProvider style={getTheme(material)}>
                        <ListItem style={{ borderBottomWidth: 0 }}>
                            {console.log('check value', this.props.checkedPolicy)}
                            <CheckBox
                                checked={this.props.checkedPolicy}
                                style={{ padding: 2.5 }}
                                color={ColorSchema.THEME_COLOR_ONE}
                                onPress={() => this.props.checkPolicy(!this.props.checkedPolicy)}
                            />
                            <Text
                                style={[text, { paddingLeft: 10, paddingRight: 5, paddingTop: 0 }]}
                            >
                                I have read a privacy statement and agree to abide by it.
                            </Text>
                        </ListItem>
                    </StyleProvider>
                    {this.renderButton()}

                </View>
            </ScrollView>
        );
    }
}

const stylesSheet = StyleSheet.create({
    text: {
        paddingLeft: 5,
        paddingTop: 15,
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        color: ColorSchema.INPUT_TEXT_ANIM_COLOR,
    },
    buttonContainer: {
        marginBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        width: '60%',
    },
});

const mapStateToProps = ({ registration }) => {
    const {
        firstName, lastName, email, password, confirmPassword, contact, employer,
        firstYearOfRegistration, gender, category, role, loading, firstNameError, lastNameError,
        emailError, passwordTypeError, confirmPasswordError, contactError, employerError,
        registrationYearError, roleError, checkedPolicy
    } = registration;
    return {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        contact,
        employer,
        firstYearOfRegistration,
        gender,
        category,
        role,
        loading,
        firstNameError,
        lastNameError,
        emailError,
        passwordTypeError,
        confirmPasswordError,
        contactError,
        employerError,
        registrationYearError,
        roleError,
        checkedPolicy
    };
};

export default connect(mapStateToProps, actions)(UserRegistration);
