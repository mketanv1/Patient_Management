import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { Button } from '../components/common';
import { styles, commonStrings } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { toTitleCase } from '../Utils';
import * as actions from '../actions';


class CheckUp extends Component {

    static navigationOptions = props => {
        const { navigation } = props;
        const { state } = navigation;
        const { params } = state;

        return {
            headerTitle: `${toTitleCase(params.patientType)}`,
        };
    };

    onButtonPress() {
        console.log('submit checkup');
    }

    renderButton() {
        if (this.props.loading) {
            return <ActivityIndicator size="large" color={ColorSchema.THEME_COLOR_ONE} />;
        }

        return (
            <Button
                btnStyle={stylesSheet.buttonStyle}
                txtStyle={styles.textSize}
                onPress={this.onButtonPress.bind(this)}
            >
                {commonStrings.txtSubmit}
            </Button>
        );
    }

    render() {
        const {
            containerStyle,
            columnContainerStyle,
        } = stylesSheet;

        return (
            <ScrollView style={{ backgroundColor: ColorSchema.THEME_COLOR_TWO }}>
                <View style={styles.container}>
                    <Text
                        style={[styles.textStyle, { color: ColorSchema.THEME_COLOR_ONE }]}
                    >
                        JOHN SMITH
                    </Text>
                    <Button
                        btnStyle={{
                            borderWidth: 1,
                            borderColor: ColorSchema.THEME_COLOR_ONE,
                            backgroundColor: ColorSchema.TRANSPARENT_COLOR,
                            width: '50%',
                            marginBottom: 5,
                        }}
                        txtStyle={{ color: ColorSchema.THEME_COLOR_ONE }}
                        onPress={() => console.log('vitals')}
                    >
                        BACK TO VITALS
                    </Button>

                    <View style={containerStyle}>
                        <View style={columnContainerStyle} >
                            <TextField
                                label='Blood Pressure'
                                value={this.props.bloodPressure}
                                onChangeText={(bloodPressure) =>
                                    this.props.bloodPressureChanged(bloodPressure)}
                                enablesReturnKeyAutomatically={true}
                                tintColor={ColorSchema.THEME_COLOR_ONE}
                                baseColor={ColorSchema.THEME_COLOR_FOUR}
                                textColor={ColorSchema.THEME_COLOR_ONE}
                                fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                                labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                                labelHeight={15}
                                onSubmitEditing={() => { this.refs.weight.focus(); }}
                                returnKeyType='next'
                            />

                            <TextField
                                ref={'weight'}
                                label='Weight'
                                value={this.props.weight}
                                onChangeText={(weight) => this.props.weightChanged(weight)}
                                enablesReturnKeyAutomatically={true}
                                tintColor={ColorSchema.THEME_COLOR_ONE}
                                baseColor={ColorSchema.THEME_COLOR_FOUR}
                                textColor={ColorSchema.THEME_COLOR_ONE}
                                fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                                labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                                labelHeight={15}
                                onSubmitEditing={() => { this.refs.spO2.focus(); }}
                                returnKeyType='next'
                            />

                            <TextField
                                ref={'spO2'}
                                label='SpO2'
                                value={this.props.SpO2}
                                onChangeText={(SpO2) => this.props.spoChanged(SpO2)}
                                enablesReturnKeyAutomatically={true}
                                tintColor={ColorSchema.THEME_COLOR_ONE}
                                baseColor={ColorSchema.THEME_COLOR_FOUR}
                                textColor={ColorSchema.THEME_COLOR_ONE}
                                fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                                labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                                labelHeight={15}
                                onSubmitEditing={() => { this.refs.cholesterol.focus(); }}
                                returnKeyType='next'
                            />

                            <TextField
                                ref={'cholesterol'}
                                label='Cholesterol'
                                value={this.props.cholesterol}
                                onChangeText={(cholesterol) =>
                                    this.props.cholesterolChanged(cholesterol)}
                                enablesReturnKeyAutomatically={true}
                                tintColor={ColorSchema.THEME_COLOR_ONE}
                                baseColor={ColorSchema.THEME_COLOR_FOUR}
                                textColor={ColorSchema.THEME_COLOR_ONE}
                                fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                                labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                                labelHeight={15}
                                onSubmitEditing={() => { this.refs.otherTest.focus(); }}
                                returnKeyType='next'
                            />

                            <TextField
                                ref={'otherTest'}
                                label='Other Test'
                                value={this.props.otherTest}
                                onChangeText={(otherTest) =>
                                    this.props.otherTestChanged(otherTest)}
                                enablesReturnKeyAutomatically={true}
                                tintColor={ColorSchema.THEME_COLOR_ONE}
                                baseColor={ColorSchema.THEME_COLOR_FOUR}
                                textColor={ColorSchema.THEME_COLOR_ONE}
                                fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                                labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                                labelHeight={15}
                                returnKeyType='next'
                            />

                        </View>

                        <View style={columnContainerStyle}>
                            <TextField
                                label='Heart Rate'
                                value={this.props.heartRate}
                                onChangeText={(heartRate) =>
                                    this.props.heartRateChanged(heartRate)}
                                enablesReturnKeyAutomatically={true}
                                tintColor={ColorSchema.THEME_COLOR_ONE}
                                baseColor={ColorSchema.THEME_COLOR_FOUR}
                                textColor={ColorSchema.THEME_COLOR_ONE}
                                fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                                labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                                labelHeight={15}
                                onSubmitEditing={() => { this.refs.waistCircumference.focus(); }}
                                returnKeyType='next'
                            />
                            <TextField
                                ref={'waistCircumference'}
                                label='Waist Circumference'
                                value={this.props.waistCircumference}
                                onChangeText={
                                    (waistCircumference) => this.props.waistCircumferenceChanged(
                                        waistCircumference
                                    )
                                }
                                enablesReturnKeyAutomatically={true}
                                tintColor={ColorSchema.THEME_COLOR_ONE}
                                baseColor={ColorSchema.THEME_COLOR_FOUR}
                                textColor={ColorSchema.THEME_COLOR_ONE}
                                fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                                labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                                labelHeight={15}
                                onSubmitEditing={() => { this.refs.fev.focus(); }}
                                returnKeyType='next'
                            />
                            <TextField
                                ref={'fev'}
                                label='F.E.V'
                                value={this.props.fev}
                                onChangeText={(fev) => this.props.fevChanged(fev)}
                                enablesReturnKeyAutomatically={true}
                                tintColor={ColorSchema.THEME_COLOR_ONE}
                                baseColor={ColorSchema.THEME_COLOR_FOUR}
                                textColor={ColorSchema.THEME_COLOR_ONE}
                                fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                                labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                                labelHeight={15}
                                onSubmitEditing={() => { this.refs.bloodGlucose.focus(); }}
                                returnKeyType='next'
                            />
                            <TextField
                                ref={'bloodGlucose'}
                                label='Blood Glucose'
                                value={this.props.bloodGlucose}
                                onChangeText={(bloodGlucose) =>
                                    this.props.bloodGlucoseChanged(bloodGlucose)}
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
                                value={this.props.notes}
                                onChangeText={(notes) => this.props.notesChanged(notes)}
                                enablesReturnKeyAutomatically={true}
                                tintColor={ColorSchema.THEME_COLOR_ONE}
                                baseColor={ColorSchema.THEME_COLOR_FOUR}
                                textColor={ColorSchema.THEME_COLOR_ONE}
                                fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                                labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                                labelHeight={15}
                                returnKeyType='done'
                            />
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        {this.renderButton()}
                        <Button
                            btnStyle={[stylesSheet.buttonStyle, { width: '60%' }]}
                            txtStyle={styles.textSize}
                            onPress={() => console.log('Sick or Injured')}
                        >
                            SICK OR INJURED
                        </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const stylesSheet = StyleSheet.create({

    containerStyle: {
        flex: 1,
        flexDirection: 'row'
    },
    columnContainerStyle: {
        flexDirection: 'column',
        width: '50%',
        paddingEnd: 5
    },
    buttonStyle: {
        paddingLeft: 20,
        paddingRight: 20
    },
});

const mapStateToProps = ({ checkUp }) => {
    const { bloodPressure, heartRate, weight, waistCircumference, SpO2, fev, cholesterol,
        bloodGlucose, otherTest, notes, loading } = checkUp;
    return {
        bloodPressure,
        heartRate,
        weight,
        waistCircumference,
        SpO2,
        fev,
        cholesterol,
        bloodGlucose,
        otherTest,
        notes,
        loading
    };
};

export default connect(mapStateToProps, actions)(CheckUp);
