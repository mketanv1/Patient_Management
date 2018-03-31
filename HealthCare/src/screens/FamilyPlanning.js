import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
} from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { TextField } from 'react-native-material-textfield';
import { Picker } from 'native-base';
import { styles, commonStrings } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button, RadioOptions } from '../components/common';
import { toTitleCase } from '../Utils';

export default class FamilyPlanning extends Component {

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
            numOfPregnancies: '',
            numOfLiveBirths: '',
            contraceptionMethod: '',
            doneSTIScreen: '',
            additionalNotes: '',
        };
        this.onSelectedSTIScreen = this.onSelectedSTIScreen.bind(this);
    }

    componentDidMount() {
        this.setState({ doneSTIScreen: 'Yes' });
    }

    /**
     * Calling  RadioButton
     */
    onSelectedSTIScreen(index, value) {
        this.setState({
            gender: `${value}`
        });
    }

    render() {
        const { picker, textStyle, textInputContainer } = stylesSheet;

        const options = [
            'ABSTINENCE',
            'BREASTFEEDING',
            'COMBINED ORAL CONTRACEPTIVE',
            'PROGESTOGEN-ONLY ORAL CONTRACEPTIVE',
            'IUD',
            'DEPOT INJECTION',
            'JADELLE IMPLANT',
            'MALE CONDOM',
            'FEMALE CONDOM',
            'NATURAL METHODS'
        ];

        return (
            <ScrollView style={{ backgroundColor: ColorSchema.THEME_COLOR_TWO }}>
                <View style={[styles.container, { justifyContent: 'flex-start', paddingTop: 5 }]}>
                    <TextField
                        label='Number Of Pregnancies'
                        value={this.state.numOfPregnancies}
                        onChangeText={(numOfPregnancies) => this.setState({ numOfPregnancies })}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType="numeric"
                        returnKeyType='next'
                    />

                    <TextField
                        label='Number Of Live Births'
                        value={this.state.numOfLiveBirths}
                        onChangeText={(numOfLiveBirths) => this.setState({ numOfLiveBirths })}
                        enablesReturnKeyAutomatically={true}
                        tintColor={ColorSchema.THEME_COLOR_ONE}
                        baseColor={ColorSchema.THEME_COLOR_FOUR}
                        textColor={ColorSchema.THEME_COLOR_ONE}
                        fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                        labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                        labelHeight={15}
                        keyboardType="numeric"
                        returnKeyType='next'
                    />

                    <View style={picker}>
                        <Text style={textStyle}>Select Contraception Method</Text>
                        <Picker
                            style={styles.pickerText}
                            mode="dropdown"
                            placeholder='Select'
                            selectedValue={this.state.contraceptionMethod}
                            onValueChange={
                                (itemValue) => this.setState({ contraceptionMethod: itemValue })
                            }
                        >
                            {options.map((item, index) => {
                                return (
                                    <Picker.Item
                                        label={item} value={index} key={index}
                                    />
                                );
                            })}
                        </Picker>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={[styles.radioHeader, { paddingLeft: 0 }]}>
                            STI Screening Done :
                        </Text>
                        <RadioGroup
                            style={{ flexDirection: 'row', alignSelf: 'center' }}
                            thickness={2}
                            color={ColorSchema.THEME_COLOR_ONE}
                            selectedIndex={0}
                            onSelect={(index, value) => this.onSelectedSTIScreen(index, value)}
                        >
                            <RadioButton value={'Yes'} >
                                <Text style={styles.radioButtonStyle}>Yes</Text>
                            </RadioButton>

                            <RadioButton value={'No'}>
                                <Text style={styles.radioButtonStyle}>No</Text>
                            </RadioButton>

                        </RadioGroup>
                    </View>
                    <Text style={textStyle}>Medication Given</Text>
                    <Text style={textStyle}>Additional Notes</Text>
                    <TextInput
                        placeholder={'Add description...'}
                        placeholderTextColor={ColorSchema.INPUT_TEXT_ANIM_COLOR}
                        underlineColorAndroid={ColorSchema.TRANSPARENT_COLOR}
                        style={textInputContainer}
                        value={this.state.additionalNotes}
                        onChangeText={(text) => this.setState({ additionalNotes: text })}
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
    picker: {
        flexDirection: 'column',
        borderBottomWidth: 0.4,
        borderColor: '#C8C7CC',
        marginBottom: 10
    },
});
