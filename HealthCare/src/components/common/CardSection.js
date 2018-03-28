import React from 'react';
import { View } from 'react-native';
import * as ColorSchema from '../../res/ColorSchema';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderRadius: ColorSchema.BORDER_RADIUS,
        borderColor: '#0A7EC3',
        shadowColor: 'red',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
        elevation: 1,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 15,
        backgroundColor: ColorSchema.THEME_COLOR_ONE,
        justifyContent: 'center',
    }
};

export { CardSection };
