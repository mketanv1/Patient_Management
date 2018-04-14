import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { styles, commonStrings } from '../res';
import { Button } from '../components/common';
import * as ColorSchema from '../res/ColorSchema';
import * as actions from '../actions';

const IMAGE_SIZE = 100;

class UserProfile extends Component {

    render() {
        return (
            <View style={[styles.container, { justifyContent: 'flex-start' }]}>
                <Image
                    source={require('../images/ic_patient.jpg')}
                    style={stylesSheet.imageContainer}
                />

                <TextField
                    label='Additional Email'
                    value={this.props.additionalEmail}
                    onChangeText={(additionalEmail) =>
                        this.props.additionalEmailChanged(additionalEmail)}
                    enablesReturnKeyAutomatically={true}
                    tintColor={ColorSchema.THEME_COLOR_ONE}
                    baseColor={ColorSchema.THEME_COLOR_FOUR}
                    textColor={ColorSchema.THEME_COLOR_ONE}
                    fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                    labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                    labelHeight={15}
                    keyboardType="email-address"
                    onSubmitEditing={() => { this.refs.qualification.focus(); }}
                    returnKeyType='next'
                />
                <TextField
                    ref={'qualification'}
                    label='Qualification'
                    value={this.props.qualification}
                    onChangeText={(qualification) =>
                        this.props.qualificationChanged(qualification)}
                    enablesReturnKeyAutomatically={true}
                    tintColor={ColorSchema.THEME_COLOR_ONE}
                    baseColor={ColorSchema.THEME_COLOR_FOUR}
                    textColor={ColorSchema.THEME_COLOR_ONE}
                    fontSize={ColorSchema.THEME_FONT_SIZE_ONE}
                    labelFontSize={ColorSchema.THEME_FONT_SIZE_FIVE}
                    labelHeight={15}
                    returnKeyType='done'
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
        );
    }

}

const stylesSheet = StyleSheet.create({
    imageContainer: {
        alignSelf: 'center',
        height: IMAGE_SIZE,
        width: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE / 2,
        marginTop: 10,
        marginBottom: 10,        
    },
});

const mapStateToProps = ({ userProfile }) => {
    const { additionalEmail, qualification, loading } = userProfile;
    return { additionalEmail, qualification, loading };
};

export default connect(mapStateToProps, actions)(UserProfile);
