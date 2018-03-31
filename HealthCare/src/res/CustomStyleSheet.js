import {
    Platform,
    StyleSheet,
    Dimensions,
} from 'react-native';

import * as ColorSchema from './ColorSchema';

const widthSize = (Dimensions.get('window').width - 42);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 15,
        backgroundColor: ColorSchema.THEME_COLOR_TWO,
    },
    opacityContainer: {
        width: widthSize,
        padding: 20,
        borderWidth: 1,
        margin: 5,
        borderRadius: ColorSchema.BORDER_RADIUS,
        borderColor: ColorSchema.THEME_COLOR_ONE,
    },
    textStyle: {
        textAlign: 'center',
        padding: ColorSchema.DEFAULT_PADDING,
        fontSize: ColorSchema.THEME_FONT_SIZE_THREE,
        color: ColorSchema.THEME_COLOR_ONE,
    },
    PageHeaderTextStyle: {
        padding: 10,
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
        color: ColorSchema.THEME_COLOR_ONE,
    },
    floatingTextStyle: {
        height: (Platform.OS === 'ios' ? 20 : 40),
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        padding: 0,
        color: ColorSchema.THEME_COLOR_ONE
    },
    pickerText: {
        color: ColorSchema.THEME_COLOR_ONE,
    },
    radioHeader: {
        paddingTop: 10,
        marginBottom: 5,
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        color: ColorSchema.INPUT_TEXT_ANIM_COLOR,
    },
    textSize: {
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
    },
    radioButtonStyle: {
        color: ColorSchema.THEME_COLOR_ONE,
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
    }
});

export { styles };
