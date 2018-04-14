import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { TextField } from 'react-native-material-textfield';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';
import { Picker } from 'native-base';
import { commonStrings, styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';
import * as actions from '../actions';
import * as utils from '../Utils';

import ManageDB from '../database/ManageDB';

const manageDatabase = new ManageDB();
const provinceOptions = [
    'Select Province',
    'Alberta',
    'British Columbia',
    'Manitoba',
    'Nunavut',
];

class NewPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageSource: null,
        };
        this.onSelectedGender = this.onSelectedGender.bind(this);
        this.onSelectedMaritalStatus = this.onSelectedMaritalStatus.bind(this);
    }

    /**
     * Calling  RadioButton
     */
    onSelectedGender(index, value) {
        this.props.patientGenderChanged(`${value}`);
    }

    onSelectedMaritalStatus(index, value) {
        this.props.patientMaritalStatusChanged(`${value}`);
    }

    /**
     * Pick image from camera and gallery.
     */
    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                let source;
                if (Platform.OS === 'android') {
                    source = { uri: response.uri, isStatic: true };
                } else {
                    source = { uri: response.uri.replace('file://', ''), isStatic: true };
                }
                // source = { uri: 'data:image/jpg;base64,' + response.data, isStatic: true };
                console.log('source==>', source);
                // this.setState({ imageSource: response.uri });
                this.setState({ imageSource: source });
                console.log('response data===>', this.state.imageSource);
                this.props.patientImageChanged(response.data);
            }
        });
    }

    /**
     * Call DatePicker Methods
     */

    onDatePickedFunction = (date) => {
        this.props.patientDOBChanged(moment(date).format('DD-MMM-YYYY'));
    }

    getCity() {
        const selectedProvince = this.props.provineHolder;
        if (selectedProvince === 1) {
            return ['Select City', 'Bentley', 'Canmore'];
        } else if (selectedProvince === 2) {
            return ['Select City', 'Surrey', 'Kamloops', 'Campbell'];
        } else {
            return ['Select City'];
        }
    }

    DatePickerMainFunctionCall = () => {
        let DateHolder = this.props.dateHolder;

        if (!DateHolder || DateHolder == null) {
            DateHolder = new Date();
            this.props.patientDateHolder(DateHolder);
        }

        //To open the dialog
        this.refs.DatePickerDialog.open({
            date: DateHolder,
        });
    }

    onButtonPress() {
        const {
            patientFirstname, patientMiddleName, patientLastname, provineHolder, cityHolder,
            patientAddress, dateOfBirth, patientGender, patientMaritalStatus, patientEmailAddress,
            patientContact, patientImage, licenceNumber, bloodType, notes,
            patientFirstnameError, patientMiddlenameError, patientLastnameError,
            patientProvinceError, patientCityError, patientAddressError, patientDOBError,
            patientEmailError, patientContactError, patientImageError, patientLicenceNumberError,
            patientBloodTypeError
        } = this.props;
        if (!patientFirstname || !patientMiddleName || !patientLastname || !provineHolder ||
            !cityHolder || !patientAddress || !dateOfBirth || !patientEmailAddress ||
            !patientContact || !patientImage || !licenceNumber || !bloodType ||
            !utils.validateEmail(patientEmailAddress)) {
            patientFirstnameError(patientFirstname);
            patientMiddlenameError(patientMiddleName);
            patientLastnameError(patientLastname);
            patientProvinceError(provineHolder);
            patientCityError(cityHolder);
            patientAddressError(patientAddress);
            patientDOBError(dateOfBirth);
            patientEmailError(patientEmailAddress);
            patientContactError(patientContact);
            patientImageError(patientImage);
            patientLicenceNumberError(licenceNumber);
            patientBloodTypeError(bloodType);
        } else {
               /*  const patient = await manageDatabase.AddPatient(patientFirstname,
                    patientMiddleName, patientLastname, provineHolder, cityHolder, 
                    patientAddress, dateOfBirth, patientGender, patientMaritalStatus,
                    patientEmailAddress, patientContact,
                    patientImage, licenceNumber, bloodType, notes); */

                this.props.navigation.navigate('PatientType');
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <ActivityIndicator size="large" color={ColorSchema.THEME_COLOR_ONE} />;
        }

        return (
            <Button
                btnStyle={{ marginTop: 15, marginBottom: 20 }}
                onPress={this.onButtonPress.bind(this)}
            >
                {commonStrings.txtSubmit}
            </Button>
        );
    }

    render() {
        const {
            container,
            datePickerBox,
            datePickerText,
            textStyle,
            ImageContainer,
            txtStyle
        } = stylesSheet;

        const cityOptions = this.getCity();
        return (
            <ScrollView style={container}>
                <View style={{ marginBottom: 10 }}>
                    <TextField
                        ref={'firstName'}
                        label='First Name'
                        value={this.props.patientFirstname}
                        onChangeText={(patientFirstname) =>
                            this.props.patientFirstnameChanged(patientFirstname)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        onSubmitEditing={() => { this.refs.middleName.focus(); }}
                        returnKeyType='next'
                        error={this.props.patientFirstnameErr}
                    />

                    <TextField
                        ref={'middleName'}
                        label='Middle Name'
                        value={this.props.patientMiddleName}
                        onChangeText={(patientMiddleName) =>
                            this.props.patientMiddlenameChanged(patientMiddleName)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        onSubmitEditing={() => { this.refs.lastName.focus(); }}
                        returnKeyType='next'
                        error={this.props.patientMiddlenameErr}
                    />

                    <TextField
                        ref={'lastName'}
                        label='Last Name'
                        value={this.props.patientLastname}
                        onChangeText={(patientLastname) =>
                            this.props.patientLastnameChanged(patientLastname)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        returnKeyType='next'
                        error={this.props.patientLastnameErr}
                    />
                    <Picker
                        style={styles.pickerText}
                        mode="dropdown"
                        placeholder="Select locality"
                        selectedValue={this.props.provineHolder}
                        onValueChange={(provineHolder) =>
                            this.props.patientProvinceChanged(provineHolder)
                        }
                    >
                        {provinceOptions.map((item, index) => {
                            return (<Picker.Item label={item} value={index} key={index} />);
                        })}
                    </Picker>
                    <View style={styles.bottomLineStyle} />
                    {<Text style={styles.errorTextStyle} >
                        {this.props.patientProvinceErr}
                    </Text>}
                    <Picker
                        style={styles.pickerText}
                        mode="dropdown"
                        placeholder="Select City"
                        selectedValue={this.props.cityHolder}
                        onValueChange={(cityHolder) => this.props.patientCityChanged(cityHolder)
                        }
                    >
                        {cityOptions.map((item, index) => {
                            return (<Picker.Item label={item} value={index} key={index} />);
                        })}
                    </Picker>
                    <View style={styles.bottomLineStyle} />
                    {<Text style={styles.errorTextStyle} >
                        {this.props.patientCityErr}
                    </Text>}
                    <TextField
                        label='Address'
                        value={this.props.patientAddress}
                        onChangeText={(patientAddress) =>
                            this.props.patientAddressChanged(patientAddress)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        returnKeyType='next'
                        error={this.props.patientAddressErr}
                    />

                    <TouchableOpacity onPress={this.DatePickerMainFunctionCall.bind(this)} >
                        <View style={datePickerBox}>
                            <Text style={datePickerText} >{
                                !this.props.dateOfBirth ?
                                    ('Select Date Of Birth') :
                                    this.props.dateOfBirth
                            }</Text>
                        </View>
                    </TouchableOpacity>
                    {<Text style={styles.errorTextStyle} >
                        {this.props.patientDOBErr}
                    </Text>}
                    <DatePickerDialog
                        ref="DatePickerDialog"
                        onDatePicked={this.onDatePickedFunction.bind(this)}
                    />

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[textStyle, { paddingRight: 50 }]}>
                            Gender :
                        </Text>
                        <RadioGroup
                            style={{ flexDirection: 'row', alignSelf: 'center' }}
                            thickness={2}
                            color={ColorSchema.THEME_COLOR_ONE}
                            selectedIndex={0}
                            onSelect={(index, value) => this.onSelectedGender(index, value)}
                        >
                            <RadioButton value={'Male'} >
                                <Text style={styles.radioButtonStyle}>Male</Text>
                            </RadioButton>

                            <RadioButton value={'Female'}>
                                <Text style={styles.radioButtonStyle}>Female</Text>
                            </RadioButton>

                        </RadioGroup>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[textStyle, { marginTop: 0 }]}>Marital Status :</Text>
                        <RadioGroup
                            style={{ flexDirection: 'row', alignSelf: 'center' }}
                            thickness={2}
                            color={ColorSchema.THEME_COLOR_ONE}
                            selectedIndex={0}
                            onSelect={(index, value) => this.onSelectedMaritalStatus(index, value)}
                        >
                            <RadioButton value={'Single'} >
                                <Text style={styles.radioButtonStyle}>Single</Text>
                            </RadioButton>

                            <RadioButton value={'Married'}>
                                <Text style={styles.radioButtonStyle}>Married</Text>
                            </RadioButton>

                        </RadioGroup>
                    </View>

                    <TextField
                        ref={'emailAddress'}
                        label='Email'
                        value={this.props.patientEmailAddress}
                        onChangeText={(patientEmailAddress) =>
                            this.props.patientEmailChanged(patientEmailAddress)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType='email-address'
                        onSubmitEditing={() => { this.refs.contactNo.focus(); }}
                        returnKeyType='next'
                        error={this.props.patientEmailErr}
                    />

                    <TextField
                        ref={'contactNo'}
                        label='Contact No'
                        value={this.props.patientContact}
                        onChangeText={(patientContact) =>
                            this.props.patientContactChanged(patientContact)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        maxLength={10}
                        keyboardType='numeric'
                        returnKeyType='next'
                        error={this.props.patientContactErr}
                    />

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[textStyle, { marginTop: 0 }]}>Image: </Text>
                        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                            <View style={ImageContainer}>
                                {
                                    this.props.patientImage === null
                                        ?
                                        <Text style={txtStyle}>Select a Photo</Text>
                                        :
                                        <Image
                                            style={{ width: 200, height: 120, margin: 1, }}
                                            source={this.state.imageSource}
                                        />
                                }
                            </View>
                        </TouchableOpacity>
                    </View>
                    {<Text style={styles.errorTextStyle} >
                        {this.props.patientImageErr}
                    </Text>}

                    <Text style={[textStyle, { marginBottom: 5 }]}>
                        ThumbPrint
                    </Text>
                    <View style={styles.bottomLineStyle} />

                    <TextField
                        ref={'licenceNo'}
                        label='Licence No'
                        value={this.props.licenceNumber}
                        onChangeText={(licenceNumber) =>
                            this.props.patientLicenceNumberChanged(licenceNumber)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType='numeric'
                        onSubmitEditing={() => { this.refs.bloodType.focus(); }}
                        returnKeyType='next'
                        error={this.props.patientLicenceNumberErr}
                    />

                    <TextField
                        ref={'bloodType'}
                        label='Blood Type'
                        value={this.props.bloodType}
                        onChangeText={(bloodType) => this.props.patientBloodTypeChanged(bloodType)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        maxLength={3}
                        onSubmitEditing={() => { this.refs.notes.focus(); }}
                        returnKeyType='next'
                        error={this.props.patientBloodTypeErr}
                    />

                    <TextField
                        ref={'notes'}
                        label='Notes'
                        value={this.props.notes}
                        onChangeText={(notes) => this.props.patientNotesChanged(notes)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        returnKeyType='done'
                    />

                    {this.renderButton()}
                </View>
            </ScrollView>
        );
    }
}

const stylesSheet = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: ColorSchema.THEME_COLOR_TWO,
    },
    textStyle: {
        padding: 15,
        paddingLeft: 0,
        marginTop: 5,
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        color: ColorSchema.THEME_COLOR_FOUR,
    },
    picker: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#C8C7CC',
    },
    pickerItemText: {
        color: ColorSchema.THEME_COLOR_ONE,
        backgroundColor: 'transparent',
        width: '95%',
        height: 60,
    },
    datePickerBox: {
        borderColor: ColorSchema.INPUT_TEXT_ANIM_COLOR,
        borderBottomWidth: 0.4,
        height: 45,
        marginBottom: 5,
        justifyContent: 'center'
    },
    datePickerText: {
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        color: ColorSchema.THEME_COLOR_ONE,
    },
    ImageContainer: {
        marginTop: 10,
        borderColor: ColorSchema.THEME_COLOR_ONE,
        borderRadius: ColorSchema.BORDER_RADIUS,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtStyle: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: ColorSchema.THEME_COLOR_ONE,
    }
});

const mapStateToProps = ({ newPatient }) => {
    const { patientFirstname, patientMiddleName, patientLastname, provineHolder, cityHolder,
        patientAddress, dateOfBirth, dateHolder, patientGender, patientMaritalStatus,
        patientEmailAddress, patientContact, patientImage, licenceNumber, bloodType, notes, loading,
        patientFirstnameErr, patientMiddlenameErr, patientLastnameErr, patientProvinceErr,
        patientCityErr, patientAddressErr, patientDOBErr, patientEmailErr, patientContactErr,
        patientImageErr, patientLicenceNumberErr, patientBloodTypeErr
    } = newPatient;
    return {
        patientFirstname,
        patientMiddleName,
        patientLastname,
        provineHolder,
        cityHolder,
        patientAddress,
        dateOfBirth,
        dateHolder,
        patientGender,
        patientMaritalStatus,
        patientEmailAddress,
        patientContact,
        patientImage,
        licenceNumber,
        bloodType,
        notes,
        loading,
        patientFirstnameErr,
        patientMiddlenameErr,
        patientLastnameErr,
        patientProvinceErr,
        patientCityErr,
        patientAddressErr,
        patientDOBErr,
        patientEmailErr,
        patientContactErr,
        patientImageErr,
        patientLicenceNumberErr,
        patientBloodTypeErr,
    };
};

export default connect(mapStateToProps, actions)(NewPatient);
