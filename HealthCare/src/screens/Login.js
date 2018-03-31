import React, { Component } from 'react';
import {
    Keyboard,
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
    AsyncStorage,
} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { styles, commonStrings } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';
import ManageDB from '../Database/ManageDB';
import * as WebApi from '../api/WebApi';

const manageDatabase = new ManageDB();

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
        };
    }

    componentDidMount() {
        AsyncStorage.multiGet(['email', 'password']).then((data) => {
            const email = data[0][1];
            const password = data[1][1];

            if (email !== null && password !== null) {
                console.log('user is already login');
                return this.props.navigation.navigate('HomeScreen');
            }
        });
    }

    getLoginSession(navigator) {
        const { email, password } = this.state;
        const base64 = require('base-64');

        return fetch(WebApi.SessionApi,
            {
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + base64.encode(email + ':' + password)
                }
            })
            .then((response) => {
                if (response.status === 200) {
                    navigator.navigate('CountrySelection');
                    return response.json();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    loginFunction(navigator) {
        /*      //Login through API
                (async()=>{
                    await this.getLoginSession(navigator);
                })();
        */

        //Login through local DB
        const { email, password } = this.state;
        const result = manageDatabase.loginUser(email, password);
        if (result.length === 1) {
            AsyncStorage.multiSet([
                ['email', email],
                ['password', password]
            ]);
            navigator.navigate('CountrySelection');
        } else {
            Alert.alert(
                commonStrings.appName,
                'Email-id or password is incorrect.');
        }
    }

    logIn = (navigator) => {
        const { email, password } = this.state;

        if (email === '') {
            this.setState(() => ({ emailError: 'You must enter an email address' }));
        } else if (!this.validateEmail(email)) {
            this.setState(() => ({ emailError: 'Please enter a valid email address.' }));
        } else if ((email > 0 && this.validateEmail(email)) || password === '') {
            this.setState(() => ({ emailError: null }));
            this.setState(() => ({ passwordError: 'You must enter a password' }));
        } else {
            this.setState(() => ({ emailError: null }));
            this.setState(() => ({ passwordError: null }));

            Keyboard.dismiss();
            this.loginFunction(navigator);
        }
    }

    validateEmail = (email) => {
        const reg =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return reg.test(email);
    };

    render() {
        const { navigate } = this.props.navigation;
        const { image, description, textLink } = stylesSheet;

        return (
            <View style={styles.container}>
                <Image
                    style={image}
                    source={require('../images/ic_launcher.png')}
                />

                <Text style={description}>
                    Collect baseline data from clinics,
                    health centers and hospitals around the world.
                </Text>

                <TextField
                    label='Email'
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    keyboardType='email-address'
                    enablesReturnKeyAutomatically={true}
                    tintColor={ColorSchema.THEME_COLOR_ONE}
                    baseColor={ColorSchema.THEME_COLOR_FOUR}
                    textColor={ColorSchema.THEME_COLOR_ONE}
                    labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                    fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                    onSubmitEditing={() => { this.refs.password.focus(); }}
                    returnKeyType='next'
                />
                {!!this.state.emailError && (
                    <Text style={{ color: ColorSchema.THEME_COLOR_THREE }}>
                        {this.state.emailError}
                    </Text>
                )}

                <TextField
                    ref='password'
                    label='Password'
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    secureTextEntry={true}
                    clearTextOnFocus={true}
                    enablesReturnKeyAutomatically={true}
                    tintColor={ColorSchema.THEME_COLOR_ONE}
                    baseColor={ColorSchema.THEME_COLOR_FOUR}
                    textColor={ColorSchema.THEME_COLOR_ONE}
                    fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                    labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                    labelHeight={15}
                    onSubmitEditing={Keyboard.dismiss}
                    returnKeyType='done'
                />
                {!!this.state.passwordError && (
                    <Text style={{ color: ColorSchema.THEME_COLOR_THREE }}>
                        {this.state.passwordError}
                    </Text>
                )}

                <Button
                    btnStyle={{ marginTop: 30, paddingLeft: 25, paddingRight: 25 }}
                    onPress={() => this.logIn(this.props.navigation)}
                >
                    LOG IN
                </Button>

                <Text style={textLink}> Not registered yet? </Text>
                <Button
                    btnStyle={{
                        borderWidth: 1,
                        borderColor: ColorSchema.THEME_COLOR_ONE,
                        backgroundColor: ColorSchema.TRANSPARENT_COLOR,
                        width: '60%'
                    }}
                    txtStyle={{ color: ColorSchema.THEME_COLOR_ONE }}
                    onPress={() => navigate('Registration')}
                >
                    REGISTER NOW
                </Button>

            </View>
        );
    }
}

const stylesSheet = StyleSheet.create({
    textLink: {
        marginTop: 20,
        padding: 10,
        textAlign: 'center',
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        color: ColorSchema.THEME_COLOR_ONE,
        includeFontPadding: true,
    },
    description: {
        color: 'white',
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        textAlign: 'center',
        marginBottom: 25
    },
    image: {
        height: 80,
        width: 80,
        marginBottom: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    }
});
