import React, { Component } from 'react';
import {
    Keyboard,
    StyleSheet,
    View,
    Text,
    Image,
    AsyncStorage,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';
import * as WebApi from '../api/WebApi';
import * as actions from '../actions';
import * as utils from '../Utils';

class Login extends Component {

    async componentWillMount() {
        await AsyncStorage.multiGet(['email', 'password']).then((data) => {
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

    // loginFunction(navigator) {
    //     /*      //Login through API
    //             (async()=>{
    //                 await this.getLoginSession(navigator);
    //             })();
    //     */

    onButtonPress() {        
        const { email, password, emailAddressError, passwordError } = this.props;
        if (!email || !password || !utils.validateEmail(email)) {            
            emailAddressError(email);
            passwordError(password);
        } else {
            this.props.loginUser(email, password, () => {                 
                this.props.navigation.navigate('CountrySelection');
            });
        }
    }

    renderButton() {
        if (this.props.loading) {
            return <ActivityIndicator size="large" color={ColorSchema.THEME_COLOR_ONE} />;
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

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
                    value={this.props.email}
                    onChangeText={(email) => this.props.emailChanged(email)}
                    keyboardType='email-address'
                    enablesReturnKeyAutomatically={true}
                    tintColor={ColorSchema.THEME_COLOR_ONE}
                    baseColor={ColorSchema.THEME_COLOR_FOUR}
                    textColor={ColorSchema.THEME_COLOR_ONE}
                    labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                    fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                    onSubmitEditing={() => { this.refs.password.focus(); }}
                    returnKeyType='next'
                    error={this.props.emailError}
                />

                <TextField
                    ref='password'
                    label='Password'
                    value={this.props.password}
                    onChangeText={(password) => this.props.passwordChanged(password)}
                    secureTextEntry={true}
                    enablesReturnKeyAutomatically={true}
                    tintColor={ColorSchema.THEME_COLOR_ONE}
                    baseColor={ColorSchema.THEME_COLOR_FOUR}
                    textColor={ColorSchema.THEME_COLOR_ONE}
                    fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                    labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                    labelHeight={15}
                    onSubmitEditing={Keyboard.dismiss}
                    returnKeyType='done'
                    error={this.props.pwdError}
                />

                {this.renderButton()}

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

const mapStateToProps = ({ auth }) => {
    const { email, password, loading, emailError, pwdError } = auth;
    return { email, password, loading, emailError, pwdError };
};

export default connect(mapStateToProps, actions)(Login);
