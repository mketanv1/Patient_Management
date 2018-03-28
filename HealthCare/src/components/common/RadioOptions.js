import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import * as ColorSchema from '../../res/ColorSchema';

/**
 * Custom RadioButton
 */
class RadioOptions extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick} style={styles.radioButton}>
                <View 
                    style={[
                        styles.radioButtonHolder,
                        {
                            height: this.props.button.size,
                            width: this.props.button.size,
                            borderColor: this.props.button.color
                        }
                    ]}
                >
                    {
                        (this.props.button.selected)
                            ? ( 
                            <View 
                                style={[styles.radioIcon,
                                {
                                    height: this.props.button.size / 2, 
                                    width: this.props.button.size / 2,
                                    backgroundColor: this.props.button.color
                                }
                                ]}
                            />
                            ) : null
                    }
                </View>
                <Text 
                    style={[styles.label, { color: this.props.button.color }]}
                >
                    {this.props.button.label}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    radioButton: {
        flex: 2,
        flexDirection: 'row',
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    radioButtonHolder:
        {
            borderRadius: 50,
            borderWidth: 1.5,
            justifyContent: 'center',
            alignItems: 'center',
        },
    radioIcon:
        {
            padding: 5,
            borderRadius: 50,
            justifyContent: 'flex-start',
            alignItems: 'center',
        },
    label:
        {
            padding: 5,
            paddingLeft: 15,
            fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        },
});

export { RadioOptions };
