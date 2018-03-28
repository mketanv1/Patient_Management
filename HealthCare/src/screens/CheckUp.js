import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
} from 'react-native';
import FloatLabelTextField from 'react-native-floating-label-text-input';
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

    myFocusFunction() {
        //on Focus
    }

    render() {        
        const {
            buttonText,
            containerStyle,
            columnContainerStyle, 
            buttonStyle 
        } = stylesSheet;

        return (
            <ScrollView style={{ backgroundColor: ColorSchema.THEME_COLOR_TWO }}>
                <View style={styles.container}>
                    <Text 
                        style={[styles.text, { color: ColorSchema.THEME_COLOR_ONE }]}
                    >
                        JOHN SMITH
                    </Text>

                    <View>
                        <Text 
                            style={buttonText} 
                            onPress={() => console.log('vitals')}
                        >
                            BACK TO VITALS
                        </Text>
                    </View>

                    <View style={containerStyle}>
                        <View style={columnContainerStyle} >
                            <FloatLabelTextField
                                placeholder={'Blood Pressure'}
                                style={styles.floatingTextStyle}
                                onChangeTextValue={
                                    (bloodPressure) => this.setState({ bloodPressure })
                                }
                                onFocus={this.myFocusFunction()}
                                onSubmitEditing={() => { this.refs.weight.focus(); }}
                            />
                            <FloatLabelTextField
                                placeholder={'Weight'}
                                style={styles.floatingTextStyle}
                                onChangeTextValue={(weight) => this.setState({ weight })}
                                onFocus={this.myFocusFunction()}
                                ref={'weight'}
                                onSubmitEditing={() => { this.refs.spO2.focus(); }}
                            />
                            <FloatLabelTextField
                                placeholder={'SpO2'}
                                style={styles.floatingTextStyle}
                                onChangeTextValue={(SpO2) => this.setState({ SpO2 })}
                                onFocus={this.myFocusFunction()}
                                ref={'spO2'}
                                onSubmitEditing={() => { this.refs.cholesterol.focus(); }}
                            />
                            <FloatLabelTextField
                                placeholder={'Cholesterol'}
                                style={styles.floatingTextStyle}
                                onChangeTextValue={(cholesterol) => this.setState({ cholesterol })}
                                onFocus={this.myFocusFunction()}
                                ref={'cholesterol'}
                                onSubmitEditing={() => { this.refs.otherTest.focus(); }}
                            />
                            <FloatLabelTextField
                                placeholder={'Other Test'}
                                style={styles.floatingTextStyle}
                                onChangeTextValue={(otherTest) => this.setState({ otherTest })}
                                onFocus={this.myFocusFunction()}
                                ref={'otherTest'}
                            />
                        </View>

                        <View style={columnContainerStyle}>
                            <FloatLabelTextField
                                placeholder={'Heart Rate'}
                                style={styles.floatingTextStyle}
                                onChangeTextValue={(heartRate) => this.setState({ heartRate })}
                                onFocus={this.myFocusFunction()}
                                onSubmitEditing={() => { this.refs.waistCircumference.focus(); }}
                            />
                            <FloatLabelTextField
                                placeholder={'Waist Circumference'}
                                style={styles.floatingTextStyle}
                                onChangeTextValue={
                                    (waistCircumference) => this.setState({ waistCircumference })
                                }
                                onFocus={this.myFocusFunction()}
                                ref={'waistCircumference'}
                                onSubmitEditing={() => { this.refs.fev.focus(); }}
                            />
                            <FloatLabelTextField
                                placeholder={'F.E.V'}
                                style={styles.floatingTextStyle}
                                onChangeTextValue={(fev) => this.setState({ fev })}
                                onFocus={this.myFocusFunction()}
                                ref={'fev'}
                                onSubmitEditing={() => { this.refs.bloodGlucose.focus(); }}
                            />
                            <FloatLabelTextField
                                placeholder={'Blood Glucose'}
                                style={styles.floatingTextStyle}
                                onChangeTextValue={
                                    (bloodGlucose) => this.setState({ bloodGlucose })
                                }
                                onFocus={this.myFocusFunction()}
                                ref={'bloodGlucose'}
                                onSubmitEditing={() => { this.refs.notes.focus(); }}
                            />
                            <FloatLabelTextField
                                placeholder={'Notes'}
                                style={styles.floatingTextStyle}
                                onChangeTextValue={(notes) => this.setState({ notes })}
                                onFocus={this.myFocusFunction()}
                                ref={'notes'}                            
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
    buttonText: {        
        alignSelf: 'center',
        textAlign: 'center',
        padding: 10,
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        borderRadius: ColorSchema.BORDER_RADIUS,
        borderWidth: 2,
        borderColor: ColorSchema.THEME_COLOR_ONE,
        color: ColorSchema.THEME_COLOR_ONE,
        backgroundColor: ColorSchema.TRANSPARENT_COLOR,
    },
});
