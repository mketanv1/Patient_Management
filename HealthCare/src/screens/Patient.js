import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { styles, commonStrings } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { CardSection } from '../components/common';

/**
 * Patient Home Page
 */
export default class Patient extends Component {

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={[styles.container, { alignItems: 'center' }]}>

                <CardSection>
                    <TouchableOpacity
                        style={styles.opacityContainer}
                        onPress={() => navigate('NewPatient')}
                    >
                        <Text style={[styles.textStyle, { color: ColorSchema.THEME_COLOR_TWO }]}>
                            {commonStrings.txtNewPatient}
                        </Text>
                    </TouchableOpacity>
                </CardSection>

                <CardSection>
                    <TouchableOpacity
                        style={styles.opacityContainer}
                        onPress={() => navigate('SearchExistingPatient')}
                    >
                        <Text style={[styles.textStyle, { color: ColorSchema.THEME_COLOR_TWO }]}>
                            {commonStrings.txtExistPatient}
                        </Text>
                    </TouchableOpacity>
                </CardSection>
            </View>
        );
    }
}
