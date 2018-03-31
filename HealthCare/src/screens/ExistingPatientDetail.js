import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    ListView,
    ActivityIndicator
} from 'react-native';
import { styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';

export default class ExistingPatientDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    render() {
        const { textStyle, buttonContainer } = stylesSheet;

        return (
            <ScrollView style={{ backgroundColor: ColorSchema.THEME_COLOR_TWO }}>
                <View style={styles.container}>
                    <View style={{ flex: 1 }}>
                        <Text style={textStyle}>John Smith</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image
                                source={require('../images/ic_patient.jpg')}
                                style={{ height: 90, width: 90, borderRadius: 90 / 2 }}
                            />

                            <Button
                                btnStyle={[buttonContainer, { width: '60%' }]}
                                txtStyle={styles.textSize}
                                onPress={() => console.log('NEW EPISODE OF CARE')}
                            >
                                NEW EPISODE OF CARE
                            </Button>
                        </View>

                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text style={textStyle}>AGE : 59</Text>
                            <Text style={textStyle}>SEX : Male</Text>
                        </View>

                        <Button
                            btnStyle={[buttonContainer, { width: '50%' }]}
                            txtStyle={styles.textSize}
                            onPress={() => console.log('updateDetails')}
                        >
                            UPDATE DETAILS
                        </Button>

                        <Button
                            btnStyle={[buttonContainer, { width: '50%' }]}
                            txtStyle={styles.textSize}
                            onPress={() => console.log('vital')}
                        >
                            VITALS (History)
                        </Button>
                    </View>

                    <Text style={textStyle}>PREVIOUS EPISODE OF CARE</Text>

                </View>
            </ScrollView>
        );
    }
}

const stylesSheet = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        padding: 10,
        fontSize: ColorSchema.THEME_FONT_SIZE_TWO,
        color: ColorSchema.THEME_COLOR_ONE,
    },
    buttonContainer: {
        width: '40%',
        paddingLeft: 20,
        paddingRight: 20
    }
});
