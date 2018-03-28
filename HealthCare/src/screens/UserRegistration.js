import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    Picker,
    Keyboard
} from 'react-native';
import FloatLabelTextField from 'react-native-floating-label-text-input';
import { ListItem, CheckBox, Icon, Right } from 'native-base';
import ManageDB from '../Database/ManageDB';
import { styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button, RadioOptions } from '../components/common';

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
            gender:
                [
                    {
                        label: 'Male',
                        color: ColorSchema.THEME_COLOR_ONE,
                        size: 20,
                        selected: true,
                    },
                    {
                        label: 'Female',
                        size: 20,
                        color: ColorSchema.THEME_COLOR_ONE,
                        selected: false,
                    },
                ],
            selectedGender: '',
            category:
                [
                    {
                        label: 'Health Worker',
                        size: 20,
                        color: ColorSchema.THEME_COLOR_ONE,
                        selected: true,
                    },
                    {
                        label: 'Allied Health',
                        size: 20,
                        color: ColorSchema.THEME_COLOR_ONE,
                        selected: false,
                    },
                    {
                        label: 'Nurse',
                        size: 20,
                        color: ColorSchema.THEME_COLOR_ONE,
                        selected: false,
                    },
                    {
                        label: 'Doctor',
                        size: 20,
                        color: ColorSchema.THEME_COLOR_ONE,
                        selected: false,
                    },
                ],
            selectedCategory: '',
            role: '',
            password: '',
            checkedPolicy: false,
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            roleError: ''

        };
    }

    componentDidMount() {
        this.state.gender.map((item) => {
            if (item.selected === true) {
                this.setState({ selectedGender: item.label });
            }
        });

        this.state.category.map((item) => {
            if (item.selected === true) {
                this.setState({ selectedCategory: item.label });
            }
        });
    }

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
            this.state.selectedGender,
            this.state.selectedCategory,
            this.state.role,
            this.state.password,
        );

        navigator.navigate('Login');
        Keyboard.dismiss();
    }

    getRoles() {
        const selectedCategory = this.state.selectedCategory;
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

    ChangeGender(index) {
        this.state.gender.map((item) => {
            item.selected = false;
        });

        this.state.gender[index].selected = true;

        this.setState({ gender: this.state.gender }, () => {
            this.setState({ selectedGender: this.state.gender[index].label });
        });
    }

    changeCategory(index) {
        this.state.category.map((item) => {
            item.selected = false;
        });

        this.state.category[index].selected = true;

        this.setState({ category: this.state.category }, () => {
            this.setState({ selectedCategory: this.state.category[index].label });
        });
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
            <ScrollView keyboardShouldPersistTaps="always" ref='scrollView'>
                <View style={styles.container}>

                    <FloatLabelTextField
                        style={styles.floatingTextStyle}
                        placeholder={'First Name'}
                        onChangeTextValue={(firstName) => this.setState({ firstName })}
                        onFocus={this.myFocusFunction}
                        ref={'firstName'}
                        onSubmitEditing={() => { this.refs.lastName.focus(); }}
                    />
                    {!!this.state.firstNameError && (
                        <Text style={{ color: ColorSchema.THEME_COLOR_THREE }}>
                            {this.state.firstNameError}
                        </Text>
                    )}

                    <FloatLabelTextField
                        style={styles.floatingTextStyle}
                        placeholder={'Last Name'}
                        onChangeTextValue={(lastName) => this.setState({ lastName })}
                        onFocus={this.myFocusFunction}
                        ref={'lastName'}
                        onSubmitEditing={() => { this.refs.email.focus(); }}
                    />
                    {!!this.state.lastNameError && (
                        <Text style={{ color: ColorSchema.THEME_COLOR_THREE }}>
                            {this.state.lastNameError}
                        </Text>
                    )}

                    <FloatLabelTextField
                        style={styles.floatingTextStyle}
                        placeholder={'Email Address'}
                        onChangeTextValue={(email) => this.setState({ email })}
                        onFocus={this.myFocusFunction}
                        keyboardType='email-address'
                        ref={'email'}
                        onSubmitEditing={() => { this.refs.password.focus(); }}
                    />
                    {!!this.state.emailError && (
                        <Text style={{ color: ColorSchema.THEME_COLOR_THREE }}>
                            {this.state.emailError}
                        </Text>
                    )}

                    <FloatLabelTextField
                        style={styles.floatingTextStyle}
                        placeholder={'Password'}
                        onChangeTextValue={(password) => this.setState({ password })}
                        secureTextEntry={true}
                        onFocus={this.myFocusFunction}
                        ref={'password'}
                        onSubmitEditing={() => { this.refs.confirmPassword.focus(); }}
                    />

                    <FloatLabelTextField
                        style={styles.floatingTextStyle}
                        placeholder={'Confirm Password'}
                        secureTextEntry={true}
                        onFocus={this.myFocusFunction}
                        ref={'confirmPassword'}
                        onSubmitEditing={() => { this.refs.phoneNumber.focus(); }}
                    />

                    <FloatLabelTextField
                        style={styles.floatingTextStyle}
                        placeholder={'Phone Number'}
                        onChangeTextValue={(phoneNumber) => this.setState({ phoneNumber })}
                        onFocus={this.myFocusFunction}
                        keyboardType='numeric'
                        ref={'phoneNumber'}
                        onSubmitEditing={() => { this.refs.employer.focus(); }}
                    />

                    <FloatLabelTextField
                        style={styles.floatingTextStyle}
                        placeholder={'Employer'}
                        onChangeTextValue={(employer) => this.setState({ employer })}
                        onFocus={this.myFocusFunction}
                        ref={'employer'}
                        onSubmitEditing={() => { this.refs.registrationYear.focus(); }}
                    />

                    <FloatLabelTextField
                        style={styles.floatingTextStyle}
                        placeholder={'First Year of Registration'}
                        onChangeTextValue={
                            (firstYearOfRegistration) => this.setState({
                                firstYearOfRegistration
                            })
                        }
                        onFocus={this.myFocusFunction}
                        keyboardType='numeric'
                        ref={'registrationYear'}
                    />

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.radioHeader]}>Gender :</Text>
                        {
                            this.state.gender.map((item, key) =>
                                (
                                    <RadioOptions
                                        key={key} button={item}
                                        onClick={this.ChangeGender.bind(this, key)}
                                    />
                                ))
                        }
                    </View>

                    <View
                        style={{
                            borderBottomColor: ColorSchema.INPUT_TEXT_ANIM_COLOR,
                            borderBottomWidth: 0.5,
                            marginTop: 10,
                        }}
                    />

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.radioHeader]}>Category :</Text>
                        {
                            this.state.category.map((item, key) =>
                                (
                                    <RadioOptions
                                        key={key} button={item}
                                        onClick={this.changeCategory.bind(this, key)}
                                    />
                                ))
                        }
                    </View>

                    <View
                        style={{
                            borderBottomColor: ColorSchema.INPUT_TEXT_ANIM_COLOR,
                            borderBottomWidth: 0.5,
                            marginTop: 10,
                        }}
                    />

                    <View style={{ flexDirection: 'column' }}>
                        <Text style={[styles.radioHeader]}>Select your Role :</Text>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Picker
                                style={[styles.pickerText]}
                                selectedValue={this.state.role}
                                onValueChange={
                                    (itemValue) => this.setState({ role: itemValue })
                                }
                            >
                                {options.map((item, index) => {
                                    return (<Picker.Item label={item} value={index} key={index} />);
                                })}
                            </Picker>
                            <Right>
                                <Icon
                                    name="ios-arrow-down"
                                    style={{
                                        alignItems: 'flex-end',
                                        color: ColorSchema.THEME_COLOR_ONE
                                    }}
                                />
                            </Right>
                        </View>
                    </View>
                    <View
                        style={{
                            borderBottomColor: ColorSchema.INPUT_TEXT_ANIM_COLOR,
                            borderBottomWidth: 0.5,
                            marginTop: 10,
                        }}
                    />
                    {!!this.state.roleError && (
                        <Text style={{ color: ColorSchema.THEME_COLOR_THREE }}>
                            {this.state.roleError}
                        </Text>
                    )}

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
                        btnStyle={buttonContainer} title="Create Account"
                        onPress={() => this.onSubmit(this.props.navigation)}
                    >
                        Create account
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
