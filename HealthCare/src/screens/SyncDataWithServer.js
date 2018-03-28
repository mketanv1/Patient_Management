import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    ProgressBarAndroid,
} from 'react-native';
import { styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';


export default class Sync extends Component {

    constructor(props) {
        super(props);
        this.state = {
            progress_value: 0.0,
        };
    }

    startProgress = () => {
        console.log('click');
        this.value = setInterval(() => {
            if (this.state.progress_value <= 1) {
                this.setState({ progress_value: this.state.progress_value + 0.01 * Math.random() });
            }
        }, 100);
    }


    render() {        
        return (
            <View style={styles.container}>
                <Text style={[styles.text, { padding: 5 }]}>Sync Complete...</Text>
                <ProgressBarAndroid
                    styleAttr="Horizontal"
                    progress={this.state.progress_value}
                    indeterminate={false}
                    animating={true}
                    color={ColorSchema.THEME_COLOR_ONE}                    
                />

                <View style={{ padding: ColorSchema.DEFAULT_PADDING }}>
                    <Text 
                        style={[styles.text, stylesSheet.textStyle]
                        }
                    >
                        Last Successful Sync
                    </Text>
                    <Text style={[styles.text, stylesSheet.textStyle]}>
                        11:30, february 23, 2018
                    </Text>
                </View>

                <Button 
                    btnStyle={{ marginTop: 10, paddingLeft: 20, paddingRight: 20 }} 
                    onPress={this.startProgress}
                >
                    Manual Sync
                </Button>
            </View>
        );
    }

}

const stylesSheet = StyleSheet.create({    
    textStyle: {
        fontSize: ColorSchema.THEME_FONT_SIZE_TWO, 
        padding: 2
    }
});
