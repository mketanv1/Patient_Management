import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';

export default class SearchExistingPatient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            surname: '',
            firstName: '',
            licenseNo: '',
            emailAddress: '',
            contactNo: '',
        };
    }

    searchUser() {
        const temp = false;
        if (temp === true) {
            //            navigator.navigate("Found");
        } else {
            //            navigator.navigate("Not_Found");
        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const { container, textStyle, buttonContainer, viewContainer, textContainer } = stylesSheet;

        return (
            <ScrollView style={container}>
                <View style={{ marginBottom: 10 }}>
                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'Surname'}
                        onChangeTextValue={(surname) => this.setState({ surname })}
                        onSubmitEditing={() => { this.refs.firstName.focus(); }}
                    />
                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'First Name'}
                        ref='firstName'
                        onChangeTextValue={(firstName) => this.setState({ firstName })}
                        onSubmitEditing={() => { this.refs.licenseNo.focus(); }}
                    />

                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'License Number(#)'}
                        ref='licenseNo'
                        onChangeTextValue={(licenseNo) => this.setState({ licenseNo })}
                        onSubmitEditing={() => { this.refs.emailAddress.focus(); }}
                    />

                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'Email'}
                        ref='emailAddress'
                        required={true}
                        onChangeTextValue={(emailAddress) => this.setState({ emailAddress })}
                        keyboardType='email-address'
                        errorMessage="Email is invalid"
                        emptyMessage="Email is required"
                        onSubmitEditing={() => { this.refs.phone.focus(); }}
                    />
                    <FloatLabelTextInput
                        style={styles.floatingTextStyle}
                        placeholder={'Phone(#)'}
                        ref='phone'
                        onChangeTextValue={(contactNo) => this.setState({ contactNo })}
                        keyboardType='numeric'
                    />

                    <View style={viewContainer} >
                        <Text style={textStyle}>
                            ThumbPrint
                        </Text>
                        <Button btnStyle={buttonContainer} txtStyle={textContainer} >
                            Select
                        </Button>
                    </View>

                    <View
                        style={{
                            borderBottomColor: ColorSchema.INPUT_TEXT_ANIM_COLOR,
                            borderBottomWidth: 0.5,
                        }}
                    />

                    <View style={viewContainer} >
                        <Text style={textStyle}>
                            Iris Scan
                        </Text>
                        <Button btnStyle={buttonContainer} txtStyle={textContainer} >
                            Select
                        </Button>
                    </View>

                    <View
                        style={{
                            borderBottomColor: ColorSchema.INPUT_TEXT_ANIM_COLOR,
                            borderBottomWidth: 0.5,
                        }}
                    />

                    <View style={viewContainer} >
                        <Text style={textStyle}>
                            Face Recognition
                        </Text>
                        <Button btnStyle={buttonContainer} txtStyle={textContainer} >
                            Select
                        </Button>
                    </View>

                    <View
                        style={{
                            borderBottomColor: ColorSchema.INPUT_TEXT_ANIM_COLOR,
                            borderBottomWidth: 0.5,
                        }}
                    />

                    <Button 
                        btnStyle={{
                            marginTop: 30, 
                            marginBottom: 10, 
                            paddingLeft: 20, 
                            paddingRight: 20 
                        }}
                        onPress={() => navigate('SearchResults')}
                    >
                        Search
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
        marginTop: 8,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: ColorSchema.BORDER_RADIUS,
        width: '30%'
    },
    textContainer: {
        fontSize: 16,
        padding: 2,
    },
});
