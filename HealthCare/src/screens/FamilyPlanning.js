import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Picker,
} from 'react-native';
import FloatLabelTextField from 'react-native-floating-label-text-input';
import { styles } from '../res';
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
            doneSTIScreen:
                [
                    {
                        label: 'Yes',
                        color: ColorSchema.THEME_COLOR_ONE,
                        size: 20,
                        selected: true,
                    },
                    {
                        label: 'No',
                        size: 20,
                        color: ColorSchema.THEME_COLOR_ONE,
                        selected: false,
                    },
                ],
            selectedSTIScreen: '',
            additionalNotes: '',
        };
    }

    componentDidMount() {
        this.state.doneSTIScreen.map((item) => {
            if (item.selected === true) {
                this.setState({ selectedSTIScreen: item.label });
            }
        });
    }

    screenSTIDone(index) {
        this.state.doneSTIScreen.map((item) => {
            item.selected = false;
        });

        this.state.doneSTIScreen[index].selected = true;

        this.setState({ doneSTIScreen: this.state.doneSTIScreen }, () => {
            this.setState({ selectedSTIScreen: this.state.doneSTIScreen[index].label });
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
                <View style={[styles.container, { justifyContent: 'flex-start' }]}>
                    <FloatLabelTextField
                        style={styles.floatingTextStyle}
                        placeholder={'Number Of Pregnancies'}
                        onChangeTextValue={
                            (numOfPregnancies) => this.setState({ numOfPregnancies })
                        }
                        keyboardType="numeric"
                    />
                    <FloatLabelTextField
                        style={styles.floatingTextStyle}
                        placeholder={'Number Of Live Births'}
                        onChangeTextValue={
                            (numOfLiveBirths) => this.setState({ numOfLiveBirths })
                        }
                        keyboardType="numeric"
                    />

                    <View style={picker}>
                        <Text style={textStyle}>Select Contraception Method</Text>
                        <Picker
                            mode="dropdown"
                            placeholder='Select'
                            selectedValue={this.state.contraceptionMethod}
                            style={styles.pickerText}
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
                        {
                            this.state.doneSTIScreen.map((item, key) =>
                                (
                                    <RadioOptions
                                        key={key}
                                        button={item}
                                        onClick={this.screenSTIDone.bind(this, key)}
                                    />
                                ))
                        }
                    </View>
                    <Text style={textStyle}>Medication Given</Text>
                    <Text style={textStyle}>Additional Notes</Text>
                    <TextInput
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
                            paddingLeft: 30,
                            paddingRight: 30
                        }}
                        onPress={() => console.log('Submited')}
                    >
                        Submit
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
        borderBottomWidth: 1,
        borderColor: '#C8C7CC',
        marginBottom: 10
    },
});
