import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';
import * as actions from '../actions';

class SearchExistingPatient extends Component {

    render() {
        const { navigate } = this.props.navigation;
        const { container, buttonContainer, viewContainer, textContainer } = stylesSheet;

        return (
            <ScrollView style={container}>
                <View style={{ marginBottom: 10 }}>
                    <TextField
                        label='Surname'
                        value={this.props.surname}
                        onChangeText={(surname) => this.props.existPatientSurnameChanged(surname)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        onSubmitEditing={() => { this.refs.firstName.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref='firstName'
                        label='First Name'
                        value={this.props.firstName}
                        onChangeText={(firstName) =>
                            this.props.existPatientFirstnameChanged(firstName)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        onSubmitEditing={() => { this.refs.licenseNo.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref='licenseNo'
                        label='License Number(#)'
                        value={this.props.licenseNo}
                        onChangeText={(licenseNo) =>
                            this.props.existPatientLicenceNumberChanged(licenseNo)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType='numeric'
                        onSubmitEditing={() => { this.refs.emailAddress.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref='emailAddress'
                        label='Email'
                        value={this.props.emailAddress}
                        onChangeText={(emailAddress) =>
                            this.props.existPatientEmailChanged(emailAddress)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType='email-address'
                        onSubmitEditing={() => { this.refs.phone.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref='phone'
                        label='Phone(#)'
                        value={this.props.contactNo}
                        onChangeText={(contactNo) =>
                            this.props.existPatientContactChanged(contactNo)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        maxLength={10}
                        keyboardType='numeric'
                        returnKeyType='done'
                    />

                    <View style={viewContainer} >
                        {/*  <Text style={textStyle}>
                            ThumbPrint
                        </Text> */}
                        <Button btnStyle={buttonContainer} txtStyle={textContainer} >
                            ThumbPrint
                        </Button>
                    </View>

                    <View style={viewContainer} >
                        {/*  <Text style={textStyle}>
                            Iris Scan
                        </Text> */}
                        <Button btnStyle={buttonContainer} txtStyle={textContainer} >
                            Iris Scan
                        </Button>
                    </View>

                    <View style={viewContainer} >
                        {/*  <Text style={textStyle}>
                            Face Recognition
                        </Text > */}
                        <Button
                            btnStyle={[buttonContainer, { width: '60%' }]}
                            txtStyle={textContainer}
                        >
                            Face Recognition
                        </Button>
                    </View>

                    <Button
                        btnStyle={{
                            marginTop: 20,
                            marginBottom: 20,
                        }}
                        onPress={() => navigate('SearchResults')}
                    >
                        SEARCH
            </Button>
                </View>
            </ScrollView>
        );
    }
}

const stylesSheet = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 5,
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
    viewContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonContainer: {
        marginLeft: 0,
        marginTop: 8,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: ColorSchema.BORDER_RADIUS,
        width: '40%'
    },
    textContainer: {
        fontSize: 16,
        padding: 2,
    },
});
const mapStateToProps = ({ searchExistingPatient }) => {
    const {
        surname, firstName, licenseNo, emailAddress, contactNo, loading
    } = searchExistingPatient;
    return {
        surname, firstName, licenseNo, emailAddress, contactNo, loading
    };
};

export default connect(mapStateToProps, actions)(SearchExistingPatient);
