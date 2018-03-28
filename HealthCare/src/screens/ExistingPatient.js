import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native';
import { styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';

const IMAGE_SIZE = 150;

export default class ExistingPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patientName: 'John Smith',
        };
    }

    render() {
        const {
            imageContainer,
            textContainer,
            buttonContainer
        } = stylesSheet;
        const { navigate } = this.props.navigation;

        return (
            <ScrollView style={{ backgroundColor: ColorSchema.THEME_COLOR_TWO }}>
                <View style={styles.container}>
                    <Text style={[styles.text, { fontSize: ColorSchema.THEME_FONT_SIZE_FOUR }]}>
                        {this.state.patientName}</Text>
                    <Image
                        source={require('../images/ic_patient.jpg')}
                        style={imageContainer}
                    />

                    <View style={{ flexDirection: 'row', alignSelf: 'center', paddingTop: 10 }}>
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={[styles.text, textContainer]}>DateOfBirth </Text>
                            <Text
                                style={[styles.text, { padding: 1, alignSelf: 'flex-start' }]}
                            >
                                Address
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            <Text style={[styles.text, textContainer]}>
                                : 12/05/1993
                            </Text>
                            <Text style={[styles.text, { padding: 1 }]}>: Hills Stations</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 25, paddingTop: 20 }}>
                        <Text style={[styles.text, { padding: 0 }]}>
                            Is This Correct? Please confirm security is important
                        </Text>

                        <Button
                            btnStyle={[buttonContainer, { marginTop: 30 }]}
                            txtStyle={styles.textSize}
                            onPress={() => navigate('ExistingPatientDetail')}
                        >
                            CONFIRMED WITH ID
                        </Button>

                        <Button
                            btnStyle={[buttonContainer]}
                            txtStyle={styles.textSize}
                            onPress={() => console.log('fingerprint...')}
                        >
                            USE FINGERPRINT
                        </Button>

                        <Button
                            btnStyle={buttonContainer}
                            txtStyle={styles.textSize}
                            onPress={() => console.log('search...')}
                        >
                            GO BACK TO SEARCH
                        </Button>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const stylesSheet = StyleSheet.create({
    imageContainer: {
        alignSelf: 'center',
        height: IMAGE_SIZE,
        width: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE / 2,
    },
    textContainer: {
        marginTop: 10,
        padding: 0,
        alignSelf: 'flex-start',
    },
    buttonContainer: {
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20,
        width: '70%'
    },
});
