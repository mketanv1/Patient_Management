import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    ListView,
    ActivityIndicator
} from 'react-native';
import { styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';
import { Button } from '../components/common';

export default class ExistingPatientDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    componentDidMount() {
        return fetch('https://reactnativecode.000webhostapp.com/StudentsList.php')
            .then((response) => response.json())
            .then((responseJson) => {
                const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, () => {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#000',
                }}
            />
        );
    }


    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        const { textStyle, buttonContainer } = stylesSheet;
        
        return (
            <ScrollView>
                <View style={[styles.container, { justifyContent: 'flex-start' }]}>
                    <View style={{ flex: 1 }}>
                        <Text style={textStyle}>John Smith</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image
                                source={require('../images/ic_patient.jpg')}
                                style={{ height: 90, width: 90, borderRadius: 90 / 2 }} />

                            <Button
                                btnStyle={buttonContainer} 
                                txtStyle={styles.textSize} 
                                onPress={() => console.log('NEW EPISODE OF CARE')}
                            >
                                NEW EPISODE OF CARE
                            </Button>
                        </View>

                        <View 
                            style={{ 
                                flex: 1, 
                                flexDirection: 'row', 
                                justifyContent: 'space-between' }}
                        >
                            <Text style={textStyle}>AGE : 59</Text>
                            <Text style={textStyle}>SEX : Male</Text>
                        </View>

                        <Button 
                            btnStyle={buttonContainer} 
                            txtStyle={styles.textSize} 
                            onPress={() => console.log('updateDetails')}
                        >
                            UPDATE DETAILS
                        </Button>

                        <Button 
                            btnStyle={buttonContainer} 
                            txtStyle={styles.textSize} 
                            onPress={() => console.log('vital')}
                        >
                            VITALS (History)
                        </Button>
                    </View>
                    <View 
                        style={{ 
                            height: 0.5, 
                            width: '100%', 
                            backgroundColor: ColorSchema.THEME_COLOR_ONE 
                        }} 
                    />
                    <Text style={textStyle}>PREVIOUS EPISODE OF CARE</Text>
                    <View style={{ flex: 1 }}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderSeparator={this.ListViewItemSeparator}
                            renderRow={(rowData) =>
                                <View style={{ flex: 1, flexDirection: 'column', padding: 5 }} >
                                    <Text style={textStyle}>{'DIAGNOSIS = ' + rowData.id}</Text>
                                    <Text style={textStyle}>{'RESULTS   = ' + rowData.student_name}</Text>
                                    <Text style={textStyle}>{'TREATMENT = ' + rowData.student_phone_number}</Text>
                                    <Text style={textStyle}>{'MEDICINE  = ' + rowData.student_subject}</Text>
                                    <Text style={textStyle}>{'NOTES     = ' + rowData.student_subject}</Text>
                                </View>
                            }
                        />

                    </View>
                </View>
            </ScrollView>
        );
    }
}

const stylesSheet = StyleSheet.create({
    textStyle: {
        alignSelf: 'flex-start',
        fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
        color: ColorSchema.THEME_COLOR_ONE,
    },
    buttonContainer: {
        width: '40%',
        paddingLeft: 20,
        paddingRight: 20
    }
});
