import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StatusBar,
    BackHandler
} from 'react-native';
import { styles, commonStrings } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { CardSection } from '../components/common';

export default class HomeScreen extends Component {

    /* componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', BackHandler.exitApp);
    } */

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackHandler);
    }

    onBackHandler = () => {
        if (this.constructor.name === 'HomeScreen') {
            this.props.navigation.goBack();
            return true;
        }
        return false;
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={{ flex: 1, backgroundColor: ColorSchema.THEME_COLOR_TWO }}>
                <StatusBar
                    backgroundColor={ColorSchema.THEME_COLOR_DARK}
                    barStyle="light-content"
                    animated={true}
                />

                <View style={{ flex: 1, justifyContent: 'center', }}>

                    <CardSection>
                        <TouchableOpacity
                            style={styles.opacityContainer}
                            onPress={() => navigate('HomePatient')}
                        >
                            <Text
                                style={[styles.textStyle, { color: ColorSchema.THEME_COLOR_TWO }]}>
                                {commonStrings.txtPatient}
                            </Text>
                        </TouchableOpacity>
                    </CardSection>

                    <CardSection>
                        <TouchableOpacity
                            style={styles.opacityContainer}
                            onPress={() => console.log('report')}
                        >
                            <Text
                                style={[styles.textStyle, { color: ColorSchema.THEME_COLOR_TWO }]}>
                                {commonStrings.txtReport}
                            </Text>
                        </TouchableOpacity>
                    </CardSection>

                    <CardSection>
                        <TouchableOpacity
                            style={styles.opacityContainer}
                            onPress={() => navigate('UserProfile')}
                        >
                            <Text
                                style={[styles.textStyle, { color: ColorSchema.THEME_COLOR_TWO }]}>
                                {commonStrings.txtUserProfile}
                            </Text>
                        </TouchableOpacity>
                    </CardSection>
                    
                </View>
            </View>
        );
    }
}
