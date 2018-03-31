import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from '../components/common';
import { styles, commonStrings } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { toTitleCase } from '../Utils';


export default class CheckUp extends Component {

    static navigationOptions = props => {
        const { navigation } = props;
        const { state } = navigation;
        const { params } = state;

        return {
            headerTitle: `${toTitleCase(params.patientType)}`,
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            bloodPressure: '',
            heartRate: '',
            weight: '',
            waistCircumference: '',
            SpO2: '',
            fev: '',
            cholesterol: '',
            bloodGlucose: '',
            otherTest: '',
            notes: '',
        };
    }

    render() {
        const {
            containerStyle,
            columnContainerStyle,
            buttonStyle
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
                                value={this.state.bloodPressure}
                                onChangeText={(bloodPressure) => this.setState({ bloodPressure })}
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
                                value={this.state.weight}
                                onChangeText={(weight) => this.setState({ weight })}
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
                                value={this.state.SpO2}
                                onChangeText={(SpO2) => this.setState({ SpO2 })}
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
                                value={this.state.cholesterol}
                                onChangeText={(cholesterol) => this.setState({ cholesterol })}
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
                                value={this.state.otherTest}
                                onChangeText={(otherTest) => this.setState({ otherTest })}
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
                                value={this.state.heartRate}
                                onChangeText={(heartRate) => this.setState({ heartRate })}
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
                                value={this.state.waistCircumference}
                                onChangeText={
                                    (waistCircumference) => this.setState({
                                        waistCircumference
                                    })
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
                                value={this.state.fev}
                                onChangeText={(fev) => this.setState({ fev })}
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
                                value={this.state.bloodGlucose}
                                onChangeText={(bloodGlucose) => this.setState({ bloodGlucose })}
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
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <Button
                            btnStyle={buttonStyle}
                            txtStyle={styles.textSize}
                            onPress={() => console.log('Submited')}
                        >
                            {commonStrings.txtSubmit}
                        </Button>

                        <Button
                            btnStyle={[buttonStyle, { width: '60%' }]}
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
