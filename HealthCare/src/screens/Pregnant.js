import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { styles, commonStrings } from '../res';
import { Button } from '../components/common';
import * as ColorSchema from '../res/ColorSchema';
import { toTitleCase } from '../Utils';
import * as actions from '../actions';

class Pregnant extends Component {
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
        this.onSelectedGlucoseTolerance = this.onSelectedGlucoseTolerance.bind(this);
        this.onSelectedFetalHeartbeat = this.onSelectedFetalHeartbeat.bind(this);
        this.onSelectedTetanusVaccine = this.onSelectedTetanusVaccine.bind(this);
    }

    /**
     * Calling  RadioButton
     */
    onSelectedGlucoseTolerance(index, value) {
        this.props.glucoseToleranceTestChanged(`${value}`);
    }

    onSelectedFetalHeartbeat(index, value) {
        this.props.fetalHeartbeatChanged(`${value}`);
    }

    onSelectedTetanusVaccine(index, value) {
        this.props.tetanusVaccineChanged(`${value}`);
    }

    render() {
        const { textStyle, textInputContainer } = stylesSheet;

        return (
            <ScrollView style={{ backgroundColor: ColorSchema.THEME_COLOR_TWO }}>
                <View style={[styles.container, { justifyContent: 'flex-start', paddingTop: 5 }]}>
                    <TextField
                        label='Number Of Previous Pregnancies'
                        value={this.props.numOfPrevPregnancies}
                        onChangeText={(numOfPrevPregnancies) =>
                            this.props.numOfPrevPregnanciesChanged(numOfPrevPregnancies)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType="numeric"
                        onSubmitEditing={() => { this.refs.liveBirths.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref={'liveBirths'}
                        label='Number Of Previous Live Births'
                        value={this.props.numOfPrevLivebirths}
                        onChangeText={(numOfPrevLivebirths) =>
                            this.props.numOfPrevLiveBirthsChanged(numOfPrevLivebirths)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType="numeric"
                        onSubmitEditing={() => { this.refs.cSection.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref={'cSection'}
                        label='Number Of C-Sections'
                        value={this.props.numOfCsections}
                        onChangeText={(numOfCsections) =>
                            this.props.numOfCSectionsChanged(numOfCsections)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType="numeric"
                        onSubmitEditing={() => { this.refs.veginalBirths.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref={'veginalBirths'}
                        label='Number Of Veginal Births'
                        value={this.props.numOfVeginalBirths}
                        onChangeText={(numOfVeginalBirths) =>
                            this.props.numOfVaginalBirthsChanged(numOfVeginalBirths)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType="numeric"
                        onSubmitEditing={() => { this.refs.weight.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref={'weight'}
                        label='Weight'
                        value={this.props.weight}
                        onChangeText={(weight) =>
                            this.props.weightTestChanged(weight)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        onSubmitEditing={() => { this.refs.bloodPressure.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref={'bloodPressure'}
                        label='Blood Pressure'
                        value={this.props.bloodPressure}
                        onChangeText={(bloodPressure) =>
                            this.props.bloodPressureTestChanged(bloodPressure)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        onSubmitEditing={() => { this.refs.heartRate.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref={'heartRate'}
                        label='Heart Rate'
                        value={this.props.heartRate}
                        onChangeText={(heartRate) =>
                            this.props.heartRateTestChanged(heartRate)}
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
                        label='Blood Glucose Test'
                        value={this.props.bloodGlucoseTest}
                        onChangeText={(bloodGlucoseTest) =>
                            this.props.bloodGlucoseTestChanged(bloodGlucoseTest)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        returnKeyType='next'
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.radioHeader, { paddingLeft: 0 }]}>
                            Glucose Tolerance Test :
                        </Text>
                        <RadioGroup
                            style={{ flexDirection: 'row', alignSelf: 'center' }}
                            thickness={2}
                            color={ColorSchema.THEME_COLOR_ONE}
                            selectedIndex={0}
                            onSelect={(index, value) =>
                                this.onSelectedGlucoseTolerance(index, value)}
                        >
                            <RadioButton value={'Ok'} >
                                <Text style={styles.radioButtonStyle}>Ok</Text>
                            </RadioButton>

                            <RadioButton value={'Refer'}>
                                <Text style={styles.radioButtonStyle}>Refer</Text>
                            </RadioButton>
                        </RadioGroup>
                    </View>

                    <TextField
                        label='Fundal Height'
                        value={this.props.fundalHeight}
                        onChangeText={(fundalHeight) =>
                            this.props.fundalHeightChanged(fundalHeight)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        returnKeyType='next'
                    />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.radioHeader, { paddingLeft: 0 }]}>
                            Fetal Heartbeat :
                        </Text>
                        <RadioGroup
                            style={{ flexDirection: 'row', alignSelf: 'center' }}
                            thickness={2}
                            color={ColorSchema.THEME_COLOR_ONE}
                            selectedIndex={0}
                            onSelect={(index, value) =>
                                this.onSelectedFetalHeartbeat(index, value)}
                        >
                            <RadioButton value={'Yes'} >
                                <Text style={styles.radioButtonStyle}>Yes</Text>
                            </RadioButton>

                            <RadioButton value={'No'}>
                                <Text style={styles.radioButtonStyle}>No</Text>
                            </RadioButton>
                        </RadioGroup>
                    </View>

                    <TextField
                        label='Urine Protein'
                        value={this.props.urineProtein}
                        onChangeText={(urineProtein) =>
                            this.props.urineProteinChanged(urineProtein)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        onSubmitEditing={() => { this.refs.urineGlucose.focus(); }}
                        returnKeyType='next'
                    />

                    <TextField
                        ref={'urineGlucose'}
                        label='Urine Glucose'
                        value={this.props.urineGlucose}
                        onChangeText={(urineGlucose) =>
                            this.props.urineGlucoseChanged(urineGlucose)}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        returnKeyType='next'
                    />

                    <Text style={textStyle}>Any Other Symptoms:</Text>
                    <TextInput
                        placeholder={'Add Symptoms...'}
                        placeholderTextColor={ColorSchema.INPUT_TEXT_ANIM_COLOR}
                        underlineColorAndroid={ColorSchema.TRANSPARENT_COLOR}
                        style={textInputContainer}
                        value={this.props.anyOtherSymptoms}
                        onChangeText={(anyOtherSymptoms) => 
                            this.props.anyOtherSymptomsChanged(anyOtherSymptoms)
                        }
                        multiline={true}
                        numberOfLines={4}
                    />

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.radioHeader, { paddingLeft: 0 }]}>
                            Tetanus Vaccine Given :
                        </Text>
                        <RadioGroup
                            style={{ flexDirection: 'row', alignSelf: 'center' }}
                            thickness={2}
                            color={ColorSchema.THEME_COLOR_ONE}
                            selectedIndex={0}
                            onSelect={(index, value) =>
                                this.onSelectedTetanusVaccine(index, value)}
                        >
                            <RadioButton value={'Yes'} >
                                <Text style={styles.radioButtonStyle}>Yes</Text>
                            </RadioButton>

                            <RadioButton value={'No'}>
                                <Text style={styles.radioButtonStyle}>No</Text>
                            </RadioButton>
                        </RadioGroup>
                    </View>

                    <Text style={textStyle}>Other Notes:</Text>
                    <TextInput
                        placeholder={'Add description...'}
                        placeholderTextColor={ColorSchema.INPUT_TEXT_ANIM_COLOR}
                        underlineColorAndroid={ColorSchema.TRANSPARENT_COLOR}
                        style={textInputContainer}
                        value={this.props.otherNotes}
                        onChangeText={(otherNotes) =>
                            this.props.otherNotesChanged(otherNotes)}
                        multiline={true}
                        numberOfLines={4}
                    />
                    <Button
                        btnStyle={{
                            marginTop: 30,
                            marginBottom: 10,
                        }}
                        onPress={() => console.log('Submited')}
                    >
                        {commonStrings.txtSubmit}
                    </Button>

                </View>
            </ScrollView>
        );
    }

}
const stylesSheet = StyleSheet.create({
    textStyle: {
        paddingTop: 15,
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        color: ColorSchema.INPUT_TEXT_ANIM_COLOR,
    },
    textInputContainer: {
        textAlignVertical: 'top',
        marginTop: 5,
        paddingTop: 5,
        paddingLeft: 10,
        borderWidth: 1,
        borderColor: ColorSchema.THEME_COLOR_ONE,
        color: ColorSchema.THEME_COLOR_ONE,
    },
});
const mapStateToProps = ({ pregnant }) => {
    const { numOfPrevPregnancies, numOfPrevLivebirths, numOfCsections, numOfVeginalBirths, weight,
        bloodPressure, heartRate, bloodGlucoseTest, glucoseToleranceTest, fundalHeight,
        fetalHeartbeat, urineProtein, urineGlucose, anyOtherSymptoms, tetanusVaccine, otherNotes,
        loading } = pregnant;
    return {
        numOfPrevPregnancies,
        numOfPrevLivebirths,
        numOfCsections,
        numOfVeginalBirths,
        weight,
        bloodPressure,
        heartRate,
        bloodGlucoseTest,
        glucoseToleranceTest,
        fundalHeight,
        fetalHeartbeat,
        urineProtein,
        urineGlucose,
        anyOtherSymptoms,
        tetanusVaccine,
        otherNotes,
        loading
    };
};

export default connect(mapStateToProps, actions)(Pregnant);
