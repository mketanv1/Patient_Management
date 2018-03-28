import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import * as ColorSchema from '../../res/ColorSchema';

const Button = ({ onPress, children, btnStyle, txtStyle }) => {
    const { buttonStyle, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={[buttonStyle, btnStyle]} >
            <Text style={[textStyle, txtStyle]}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        borderRadius: 22,
        margin: 5,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: ColorSchema.THEME_COLOR_ONE,
        width: '40%',
    },
    textStyle: {
        textAlign: 'center',
        fontSize: ColorSchema.THEME_FONT_SIZE_TWO,
        color: ColorSchema.THEME_COLOR_TWO,
    }
};

export { Button };
