import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    TextInput,
} from 'react-native';
import { Icon } from 'native-base';
import FloatLabelTextInput from 'react-native-floating-label-text-input';
import { commonStrings, styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';
import { toTitleCase } from '../Utils';

export default class SickOrInjured extends Component {

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
            treatmentNotes: '',
            labResults: '',
            medication: '',
            comments: '',

            isLoading: true,
            text: '',
        };
        this.arrayHolder = [];
    }

    render() {
        const {
            container,
            searchSection,
            searchBar
        } = stylesSheet;

        return (
            <ScrollView style={container}>
                <View>
                    <View style={searchSection}>
                        <Icon
                            style={{ padding: 14, color: ColorSchema.THEME_COLOR_TWO }}
                            name='ios-search'
                        />
                        <TextInput
                            style={searchBar}
                            value={this.state.text}
                            onChangeText={(text) => this.setState({ text })}
                            placeholder='Search Diagnosis...'
                            placeholderTextColor={ColorSchema.THEME_COLOR_FOUR}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    <View style={{ padding: 5 }}>
                        <FloatLabelTextInput
                            style={styles.floatingTextStyle}
                            style={styles.floatingTextStyle}
                            placeholder={'Treatment Notes'}
                            ref='treatment'
                            onChangeTextValue={
                                (treatmentNotes) => this.setState({ treatmentNotes })
                            }
                            onSubmitEditing={() => { this.refs.labResults.focus(); }}
                        />
                        <FloatLabelTextInput
                            style={styles.floatingTextStyle}
                            placeholder={'Lab/Test Results'}
                            ref='labResults'
                            onChangeTextValue={(labResults) => this.setState({ labResults })}
                            onSubmitEditing={() => { this.refs.medication.focus(); }}
                        />
                        <FloatLabelTextInput
                            style={styles.floatingTextStyle}
                            placeholder={'Medication'}
                            ref='medication'
                            onChangeTextValue={(medication) => this.setState({ medication })}
                            onSubmitEditing={() => { this.refs.comments.focus(); }}
                        />
                        <FloatLabelTextInput
                            style={styles.floatingTextStyle}
                            placeholder={'Comments'}
                            ref='comments'
                            onChangeTextValue={(comments) => this.setState({ comments })}
                        />

                        <Button
                            btnStyle={{
                                marginTop: 30,
                                marginBottom: 10,
                                paddingLeft: 30,
                                paddingRight: 30
                            }}
                            onPress={() => console.log('SubmitEpisodeOfCare')}
                        >
                            {commonStrings.txtSubmit}
                        </Button>

                    </View>
                </View>
            </ScrollView>
        );
    }
}

const stylesSheet = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: ColorSchema.THEME_COLOR_TWO,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 2,
        borderColor: ColorSchema.THEME_COLOR_ONE,
        backgroundColor: ColorSchema.THEME_COLOR_ONE,
        borderRadius: ColorSchema.BORDER_RADIUS,
        margin: 5,
    },
    searchBar: {
        flex: 1,
        paddingTop: 12,
        paddingRight: 12,
        paddingBottom: 12,
        paddingLeft: 5,
        backgroundColor: ColorSchema.THEME_COLOR_TWO,
        color: ColorSchema.THEME_COLOR_ONE,
        fontSize: ColorSchema.THEME_FONT_SIZE_TWO,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: ColorSchema.THEME_COLOR_ONE,
    },
    iconContainer: {
        padding: 13.5,
        borderRightWidth: 2,
        borderColor: ColorSchema.THEME_COLOR_ONE,
        color: ColorSchema.THEME_COLOR_ONE,
        backgroundColor: ColorSchema.THEME_COLOR_TWO,
    },
});
