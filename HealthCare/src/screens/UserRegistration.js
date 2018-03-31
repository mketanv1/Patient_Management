import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Keyboard,
} from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { TextField } from 'react-native-material-textfield';
import { ListItem, CheckBox, Picker } from 'native-base';
import ManageDB from '../Database/ManageDB';
import { styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';

const manageDB = new ManageDB();

export default class UserRegistration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            employer: '',
            firstYearOfRegistration: '',
            gender: '',
            category: '',
            role: '',
            password: '',
            checkedPolicy: false,
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            roleError: '',
        };
        this.onSelect = this.onSelect.bind(this);
        this.onSelectedCategory = this.onSelectedCategory.bind(this);
    }

    componentDidMount() {
        this.setState({ gender: 'Male' });
        this.setState({ category: 'Health Worker' });
    }

    /**
     * Calling  RadioButton
     */
    onSelect(index, value) {
        this.setState({
            gender: `${value}`
        });
    }

    onSelectedCategory(index, value) {
        this.setState({
            category: `${value}`
        });
    }

    /**
     * submit registration from onClick
     */
    onSubmit = (navigator) => {
        if (this.state.firstName === '') {
            this.refs.firstName.focus();
            this.setState(() => ({ firstNameError: 'First name is required.' }));
        } else if (!this.validateCommon(this.state.firstName)) {
            this.refs.firstName.focus();
            this.setState(() => ({ firstNameError: 'Please enter a valid first name.' }));
        } else {
            this.setState(() => ({ firstNameError: null }));
        }

        if (this.state.lastName === '') {
            this.refs.lastName.focus();
            this.setState(() => ({ lastNameError: 'Last name is required.' }));
        } else if (!this.validateCommon(this.state.lastName)) {
            this.refs.lastName.focus();
            this.setState(() => ({ lastNameError: 'Please enter a valid last name.' }));
        } else {
            this.setState(() => ({ lastNameError: null }));
        }

        if (this.state.email === '') {
            this.setState(() => ({ emailError: 'Email is required.' }));
        } else if (!this.validateEmail(this.state.email)) {
            this.refs.email.focus();
            this.setState(() => ({ emailError: 'Please enter a valid email address.' }));
        } else {
            this.setState(() => ({ emailError: null }));
        }

        if (this.state.role === '') {
            this.setState(() => ({ roleError: 'Select any one role.' }));
        } else {
            this.setState(() => ({ roleError: null }));
        }

        manageDB.AddUser(
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.phoneNumber,
            this.state.employer,
            this.state.firstYearOfRegistration,
            this.state.gender,
            this.state.category,
            this.state.role,
            this.state.password,
        );

        navigator.navigate('Login');
        Keyboard.dismiss();
    }

    getRoles() {
        const selectedCategory = this.state.category;
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

    validateCommon = (value) => {
        const name = /^[a-zA-Z]+$/;
        return name.test(value);
    };

    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    validateNumeric = (numeric) => {
        const numericExpression = /^[0-9]+$/;
        return numericExpression.test(numeric);
    };


    render() {
        const { text, buttonContainer } = stylesSheet;
        const options = this.getRoles();

        return (
            <ScrollView
                overScrollMode='always'
                // keyboardShouldPersistTaps="handled"
                ref='scrollView'
            >
                <View style={[styles.container, { paddingBottom: 0 }]}>

                    <TextField
                        ref={'firstName'}
                        label='First Name'
                        value={this.state.firstName}
                        onChangeText={(firstName) => this.setState({ firstName })}
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
                    />
                    {!!this.state.firstNameError && (
                        <Text style={{ color: ColorSchema.THEME_COLOR_THREE }}>
                            {this.state.firstNameError}
                        </Text>
                    )}

                    <TextField
                        ref={'lastName'}
                        label='Last Name'
                        value={this.state.lastName}
                        onChangeText={(lastName) => this.setState({ lastName })}
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
                    />
                    {!!this.state.lastNameError && (
                        <Text style={{ color: ColorSchema.THEME_COLOR_THREE }}>
                            {this.state.lastNameError}
                        </Text>
                    )}

                    <TextField
                        ref={'email'}
                        label='Email Address'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
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
                    />
                    {!!this.state.emailError && (
                        <Text style={{ color: ColorSchema.THEME_COLOR_THREE }}>
                            {this.state.emailError}
                        </Text>
                    )}
                    <TextField
                        ref={'password'}
                        label='Password'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
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
                    />

                    <TextField
                        ref={'confirmPassword'}
                        label='Confirm Password'
                        onFocus={this.myFocusFunction}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        secureTextEntry={true}
                        onSubmitEditing={() => { this.refs.phoneNumber.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref={'phoneNumber'}
                        label='Phone Number'
                        value={this.state.phoneNumber}
                        onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
                        onFocus={this.myFocusFunction}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType='numeric'
                        onSubmitEditing={() => { this.refs.employer.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref={'employer'}
                        label='Employer'
                        value={this.state.employer}
                        onChangeText={(employer) => this.setState({ employer })}
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
                    />

                    <TextField
                        ref={'registrationYear'}
                        label='First Year of Registration'
                        value={this.state.firstYearOfRegistration}
                        onChangeText={
                            (firstYearOfRegistration) => this.setState({
                                firstYearOfRegistration
                            })
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
                            selectedValue={this.state.role}
                            onValueChange={
                                (itemValue) => this.setState({ role: itemValue })
                            }
                        >
                            {options.map((item, index) => {
                                return (<Picker.Item label={item} value={index} key={index} />);
                            })}
                        </Picker>
                    </View>

                    {!!this.state.roleError && (
                        <Text style={{ color: ColorSchema.THEME_COLOR_THREE }}>
                            {this.state.roleError}
                        </Text>
                    )}
                </View>
                <View style={[styles.container, { padding: 0 }]}>
                    <ListItem style={{ borderBottomWidth: 0 }}>
                        <CheckBox
                            checked={this.state.checkedPolicy}
                            style={{ padding: 2.5 }}
                            color={ColorSchema.THEME_COLOR_ONE}
                            onPress={() => this.setState({
                                checkedPolicy: !this.state.checkedPolicy
                            })}
                        />
                        <Text style={[text, { paddingLeft: 10, paddingRight: 5, paddingTop: 0 }]}>
                            I have read a privacy statement and agree to abide by it.
                    </Text>
                    </ListItem>

                    <Button
                        btnStyle={[buttonContainer, { width: '60%' }]} title="Create Account"
                        onPress={() => this.onSubmit(this.props.navigation)}
                    >
                        CREATE ACCOUNT
                    </Button>
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
