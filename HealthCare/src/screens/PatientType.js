import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
} from 'react-native';
import { commonStrings } from '../res';
import * as ColorSchema from '../res/ColorSchema';

export default class PatientType extends Component {

    constructor(props) {
        super(props);
        this.state = {
            patientType: [
                { key: commonStrings.txtSickOrInjured },
                { key: commonStrings.txtCheckUp },
                { key: commonStrings.txtPregnant },
                { key: commonStrings.txtFamilyPlanning },
                { key: commonStrings.txtVaccine },
                { key: commonStrings.txtDeceased }
            ],
        };
    }

    initializeControl = (navigator, item) => {
        const selectedPatientType = item.patientType;
        if (selectedPatientType === commonStrings.txtSickOrInjured) {
            navigator.navigate('sickOrInjured', item);
        } else if (selectedPatientType === commonStrings.txtCheckUp) {
            navigator.navigate('CheckUp', item);
        } else if (selectedPatientType === commonStrings.txtFamilyPlanning) {
            navigator.navigate('FamilyPlanning', item);
        }
    }


    render() {
        const {
            container,
            GridViewBlockStyle,
            GridViewInsideTextItemStyle
        } = stylesSheet;

        return (
            <View style={container}>
                <FlatList
                    data={this.state.patientType}
                    renderItem={({ item }) =>
                        <View style={GridViewBlockStyle}>
                            <Text
                                style={GridViewInsideTextItemStyle}
                                onPress={() =>
                                    this.initializeControl(
                                        this.props.navigation,
                                        { patientType: item.key })
                                }
                            >
                                {item.key} </Text>
                        </View>
                    }
                    numColumns={2}
                />
            </View>
        );
    }
}

const stylesSheet = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
        backgroundColor: ColorSchema.THEME_COLOR_TWO,
    },
    GridViewBlockStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        margin: 5,
        borderWidth: 1,
        borderColor: ColorSchema.THEME_COLOR_ONE,
        borderRadius: ColorSchema.BORDER_RADIUS,
    },
    GridViewInsideTextItemStyle: {
        color: ColorSchema.THEME_TEXT_COLOR_ONE,
        padding: 10,
        fontSize: ColorSchema.THEME_FONT_SIZE_TWO,
        textAlign: 'center',
        justifyContent: 'center',
    },
    headerText: {
        padding: 5,
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        fontSize: ColorSchema.THEME_FONT_SIZE_FOUR,
        color: ColorSchema.THEME_COLOR_ONE,
    },
});
