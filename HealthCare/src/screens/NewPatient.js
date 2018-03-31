import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { TextField } from 'react-native-material-textfield';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';
import { Picker } from 'native-base';
import { commonStrings, styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';

const provinceOptions = [
    'Select Province',
    'Alberta',
    'British Columbia',
    'Manitoba',
    'Nunavut',
];

export default class NewPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            middleName: '',
            lastName: '',
            provinceValueHolder: '',
            cityValueHolder: '',
            address: '',
            dateText: '',
            dateHolder: null,
            gender: '',
            maritalStatus: '',
            emailAddress: '',
            contactNo: '',
            imageSource: null,
            licenceNo: '',
            bloodType: '',
            notes: '',
            validate: false,
        };
        this.onSelectedGender = this.onSelectedGender.bind(this);
        this.onSelectedMaritalStatus = this.onSelectedMaritalStatus.bind(this);
    }

    componentDidMount() {
        this.setState({ gender: 'Male' });
        this.setState({ maritalStatus: 'Single' });
    }
    
    /**
     * Calling  RadioButton
     */
    onSelectedGender(index, value) {
        this.setState({
            gender: `${value}`
        });
    }

    onSelectedMaritalStatus(index, value) {
        this.setState({
            maritalStatus: `${value}`
        });
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
                const source = { uri: response.uri };
                this.setState({
                    imageSource: source
                });
            }
        });
    }

    /**
     * Call DatePicker Methods
     */

    onDatePickedFunction = (date) => {
        this.setState({
            dobDate: date,
            dateText: moment(date).format('DD-MMM-YYYY')
        });
    }

    getCity() {
        const selectedProvince = this.state.provinceValueHolder;
        if (selectedProvince === 1) {
            return ['Select City', 'Bentley', 'Canmore'];
        } else if (selectedProvince === 2) {
            return ['Select City', 'Surrey', 'Kamloops', 'Campbell'];
        } else {
            return ['Select City'];
        }
    }
    
    DatePickerMainFunctionCall = () => {
        DateHolder = this.state.dateHolder;

        if (!DateHolder || DateHolder == null) {
            DateHolder = new Date();
            this.setState({
                DateHolder: DateHolder
            });
        }

        //To open the dialog
        this.refs.DatePickerDialog.open({
            date: DateHolder,
        });
    }

    render() {
        const { navigate } = this.props.navigation;
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
                        value={this.state.firstName}
                        onChangeText={(firstName) => this.setState({ firstName })}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        onSubmitEditing={() => { this.refs.middleName.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref={'middleName'}
                        label='Middle Name'
                        value={this.state.middleName}
                        onChangeText={(middleName) => this.setState({ middleName })}
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

                    <TextField
                        ref={'lastName'}
                        label='Last Name'
                        value={this.state.lastName}
                        onChangeText={(lastName) => this.setState({ lastName })}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        returnKeyType='next'
                    />
                    <Picker
                        style={styles.pickerText}
                        mode="dropdown"
                        placeholder="Select locality"
                        selectedValue={this.state.provinceValueHolder}
                        onValueChange={
                            (itemValue) => this.setState({ provinceValueHolder: itemValue })
                        }
                    >
                        {provinceOptions.map((item, index) => {
                            return (<Picker.Item label={item} value={index} key={index} />);
                        })}
                    </Picker>
                    <View
                        style={{
                            borderBottomColor: ColorSchema.INPUT_TEXT_ANIM_COLOR,
                            borderBottomWidth: 0.4,
                            marginBottom: 5,
                        }}
                    />
                    <Picker
                        style={styles.pickerText}
                        mode="dropdown"
                        placeholder="Select City"
                        selectedValue={this.state.cityValueHolder}
                        onValueChange={
                            (itemValue) => this.setState({ cityValueHolder: itemValue })
                        }
                    >
                        {cityOptions.map((item, index) => {
                            return (<Picker.Item label={item} value={index} key={index} />);
                        })}
                    </Picker>
                    <View
                        style={{
                            borderBottomColor: ColorSchema.INPUT_TEXT_ANIM_COLOR,
                            borderBottomWidth: 0.4,
                            marginBottom: 5,
                        }}
                    />
                    <TextField
                        label='Address'
                        value={this.state.address}
                        onChangeText={(address) => this.setState({ address })}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        returnKeyType='next'
                    />

                    <TouchableOpacity onPress={this.DatePickerMainFunctionCall.bind(this)} >
                        <View style={datePickerBox}>
                            <Text style={datePickerText} >{
                                !this.state.dateText ? ('Select Date Of Birth') : this.state.dateText
                            }</Text>
                        </View>
                    </TouchableOpacity>

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
                        value={this.state.emailAddress}
                        onChangeText={(emailAddress) => this.setState({ emailAddress })}
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
                    />

                    <TextField
                        ref={'contactNo'}
                        label='Contact No'
                        value={this.state.contactNo}
                        onChangeText={(contactNo) => this.setState({ contactNo })}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType='numeric'
                        returnKeyType='next'
                    />

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[textStyle, { marginTop: 0 }]}>Image: </Text>
                        <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                            <View style={ImageContainer}>
                                {
                                    this.state.imageSource === null
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

                    <Text style={[textStyle, { marginBottom: 5 }]}>
                        ThumbPrint
                    </Text>

                    <View
                        style={{
                            borderBottomColor: ColorSchema.INPUT_TEXT_ANIM_COLOR,
                            borderBottomWidth: 0.4,
                            marginBottom: 5,
                        }}
                    />

                    <TextField
                        ref={'licenceNo'}
                        label='Licence No'
                        value={this.state.licenceNo}
                        onChangeText={(licenceNo) => this.setState({ licenceNo })}
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
                    />

                    <TextField
                        ref={'bloodType'}
                        label='Blood Type'
                        value={this.state.bloodType}
                        onChangeText={(bloodType) => this.setState({ bloodType })}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        onSubmitEditing={() => { this.refs.notes.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref={'notes'}
                        label='Notes'
                        value={this.state.notes}
                        onChangeText={(notes) => this.setState({ notes })}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        returnKeyType='done'
                    />

                    <Button
                        btnStyle={{
                            marginTop: 15,
                            marginBottom: 20,
                        }}
                        onPress={() => navigate('PatientType')}
                    >
                        {commonStrings.txtSubmit}
                    </Button>
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
