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
    text: {
        textAlign: 'center',
        padding: ColorSchema.DEFAULT_PADDING,
        fontSize: 22,
        color: ColorSchema.THEME_COLOR_ONE,
    },
    PageHeaderTextStyle: {
        padding: 10,
        fontSize: 28,
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
        width: '90%',
        paddingLeft: 5,
        backgroundColor: ColorSchema.TRANSPARENT_COLOR,
        color: ColorSchema.THEME_COLOR_ONE,
    },
    radioHeader: {
        paddingLeft: 5,
        paddingTop: 10,
        marginBottom: 5,
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        color: ColorSchema.INPUT_TEXT_ANIM_COLOR,
    },
    textSize: {
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
    },
});

export { styles };
