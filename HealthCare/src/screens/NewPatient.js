import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Picker,
    Image,
} from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';
import { Icon, Right } from 'native-base';
import { commonStrings, styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button, RadioOptions } from '../components/common';

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
            gender:
                [
                    {
                        label: 'Female',
                        size: 16,
                        color: ColorSchema.THEME_COLOR_ONE,
                        selected: false,
                    },
                    {
                        label: 'Male',
                        color: ColorSchema.THEME_COLOR_ONE,
                        size: 16,
                        selected: false,
                    },
                ],
            selectedItem: '',
            maritalStatus:
                [
                    {
                        label: 'Single',
                        size: 16,
                        color: ColorSchema.THEME_COLOR_ONE,
                        selected: false,
                    },
                    {
                        label: 'Married',
                        size: 16,
                        color: ColorSchema.THEME_COLOR_ONE,
                        selected: false,
                    },
                ],
            selectedStatus: '',
            emailAddress: '',
            contactNo: '',
            imageSource: null,
            licenceNo: '',
            bloodType: '',
            notes: '',
            validate: false,
        };
    }

    /**
     * Calling Custom RadioButton
     */
    componentDidMount() {
        this.state.gender.map((item) => {
            if (item.selected === true) {
                this.setState({ selectedItem: item.label });
            }
        });
        this.state.maritalStatus.map((item) => {
            if (item.selected === true) {
                this.setState({ selectedStatus: item.label });
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

    changeActiveRadioButton(index) {
        this.state.gender.map((item) => {
            item.selected = false;
        });

        this.state.gender[index].selected = true;

        this.setState({ gender: this.state.gender }, () => {
            this.setState({ selectedItem: this.state.gender[index].label });
        });
    }

    changeActiveMaritalStatus(index) {
        this.state.maritalStatus.map((item) => {
            item.selected = false;
        });

        this.state.maritalStatus[index].selected = true;

        this.setState({ maritalStatus: this.state.maritalStatus }, () => {
            this.setState({ selectedStatus: this.state.maritalStatus[index].label });
        });
    }

    render() {
        const { navigate } = this.props.navigation;
        const {
            container,
            picker,
            pickerItemText,
            datePickerBox,
            datePickerText,
            welcome,
            ImageContainer,
            txtStyle
        } = stylesSheet;

        return (
            <ScrollView style={container}>
                <View style={{ marginBottom: 10 }}>
                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'First Name'}
                        onChangeTextValue={
                            (firstName) => this.setState({ firstName })
                        }
                        onSubmitEditing={() => { this.refs.middleName.focus(); }}
                    />

                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'Middle Name'}
                        ref='middleName'
                        onChangeTextValue={
                            (middleName) => this.setState({ middleName })
                        }
                        onSubmitEditing={() => { this.refs.lastName.focus(); }}
                    />

                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'Last Name'}
                        ref='lastName'
                        onChangeTextValue={
                            (lastName) => this.setState({ lastName })
                        }
                    />

                    <View style={picker}>
                        <Picker
                            mode="dropdown"
                            placeholder='Select locality'
                            selectedValue={this.state.provinceValueHolder}
                            onValueChange={
                                (itemValue) => this.setState({ provinceValueHolder: itemValue })
                            }
                            style={pickerItemText}
                        >
                            {/* List of province displayed from api. Currently it is dumy list */}

                            <Picker.Item label="Province" value="Province" />
                            <Picker.Item label="Alberta" value="Alberta" />
                            <Picker.Item label="British Columbia" value="British Columbia" />
                            <Picker.Item label="Manitoba" value="Manitoba" />
                            <Picker.Item label="Nunavut" value="Nunavut" />
                        </Picker>
                        <Right>
                            <Icon
                                name="ios-arrow-down"
                                style={{ color: ColorSchema.THEME_COLOR_ONE }}
                            />
                        </Right>
                    </View>

                    <View style={picker}>
                        <Picker
                            mode="dropdown"
                            placeholder='Select City'
                            selectedValue={this.state.cityValueHolder}
                            onValueChange={
                                (itemValue) => this.setState({ cityValueHolder: itemValue })
                            }
                            style={pickerItemText}
                        >
                            {/* List of city displayed from api. Currently it is dumy list */}

                            <Picker.Item label="City" value="City" />
                            <Picker.Item label="Bentley" value="Bentley" />
                            <Picker.Item label="Canmore" value="Canmore" />                            
                        </Picker>
                        <Right>
                            <Icon
                                name="ios-arrow-down"
                                style={{ color: ColorSchema.THEME_COLOR_ONE }}
                            />
                        </Right>
                    </View>

                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'Address'}
                        onChangeTextValue={
                            (address) => this.setState({ address })
                        }
                    />

                    <TouchableOpacity onPress={this.DatePickerMainFunctionCall.bind(this)} >
                        <View style={datePickerBox}>
                            <Text style={datePickerText} >{this.state.dateText}</Text>
                        </View>
                    </TouchableOpacity>

                    <DatePickerDialog
                        ref="DatePickerDialog"
                        onDatePicked={this.onDatePickedFunction.bind(this)}
                    />

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[welcome, { paddingRight: 50, marginBottom: 10 }]}>
                            Gender :
                        </Text>
                        {
                            this.state.gender.map((item, key) =>
                                (
                                    <RadioOptions
                                        key={key}
                                        button={item}
                                        onClick={this.changeActiveRadioButton.bind(this, key)}
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

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[welcome, { marginBottom: 10 }]}>Marital Status :</Text>
                        {
                            this.state.maritalStatus.map((item, key) =>
                                (
                                    <RadioOptions
                                        key={key}
                                        button={item}
                                        onClick={this.changeActiveMaritalStatus.bind(this, key)}
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

                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'Email'}
                        ref='emailAddress'
                        required={true}
                        validate={this.validateEmail}
                        onChangeTextValue={
                            (emailAddress) => this.setState({ emailAddress })
                        }
                        keyboardType='email-address'
                        errorMessage="Email is invalid"
                        emptyMessage="Email is required"
                        onSubmitEditing={() => { this.refs.contactNo.focus(); }}
                    />
                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'Contact No'}
                        ref='contactNo'
                        onChangeTextValue={
                            (contactNo) => this.setState({ contactNo })
                        }
                        keyboardType='numeric'
                    />

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[welcome, { marginBottom: 5 }]}>Image: </Text>
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

                    <View
                        style={{
                            borderBottomColor: ColorSchema.INPUT_TEXT_ANIM_COLOR,
                            borderBottomWidth: 0.5,
                            marginTop: 10,
                        }}
                    />

                    <Text style={[welcome, { marginBottom: 10 }]}>
                        ThumbPrint
                    </Text>

                    <View
                        style={{
                            borderBottomColor: ColorSchema.INPUT_TEXT_ANIM_COLOR,
                            borderBottomWidth: 0.5,
                            marginTop: 0,
                        }}
                    />

                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'Licence No'}
                        ref='licenceNo'
                        onChangeTextValue={
                            (licenceNo) => this.setState({ licenceNo })
                        }
                        keyboardType='numeric'
                        onSubmitEditing={() => { this.refs.bloodType.focus(); }}
                    />

                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'Blood Type'}
                        ref='bloodType'
                        onChangeTextValue={
                            (bloodType) => this.setState({ bloodType })
                        }
                        onSubmitEditing={() => { this.refs.notes.focus(); }}
                    />

                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'Notes'}
                        ref='notes'
                        onChangeTextValue={
                            (notes) => this.setState({ notes })
                        }
                        multiline={true}
                    />

                    <Button
                        btnStyle={{
                            marginTop: 30,
                            marginBottom: 10,
                            paddingLeft: 30,
                            paddingRight: 30
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
    welcome: {
        padding: 15,
        paddingLeft: 0,
        marginTop: 5,
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        color: ColorSchema.THEME_COLOR_FOUR,
    },
    picker: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#C8C7CC',
        marginBottom: 10
    },
    pickerItemText: {
        color: ColorSchema.THEME_COLOR_ONE,
        backgroundColor: 'transparent',
        width: 250,
        height: 60,
    },
    datePickerBox: {
        borderColor: ColorSchema.THEME_COLOR_FOUR,
        borderBottomWidth: 1,
        padding: 0,
        height: 60,
        marginBottom: 10,
        justifyContent: 'center'
    },
    datePickerText: {
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        marginLeft: 10,
        borderWidth: 0,
        color: ColorSchema.THEME_COLOR_ONE,
    },
    ImageContainer: {
        marginTop: 20,
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
