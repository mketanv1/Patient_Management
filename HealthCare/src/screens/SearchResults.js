import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    ListView
} from 'react-native';
import { styles, commonStrings } from '../res';
import * as ColorSchema from '../res/ColorSchema';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class SearchResults extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pageHeaderText: 'Not Found',
            isLoading: true,
            allPatients: ds,
            found_view: false,
        };
    }

    componentDidMount() {
        //Currently it is static patient data which will change with database data after calling api. 
        const responseJson = {
            0:
                {
                    name: 'test',
                    dob: '10-09-1994',
                    address: 'surat'
                },
            1:
                {
                    name: 'abc',
                    dob: '11-12-1992',
                    address: 'surat'
                },
        };

        if (responseJson != null) {
            this.setState({
                isLoading: false,
                allPatients: ds.cloneWithRows(responseJson),
            }, () => {
                // In this block you can do something with new state.
            });
        }
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#fff',
                }}
            />
        );
    }

    updateHeaderText() {
        if (this.state.found_view) {
            this.setState({ pageHeaderText: 'Not Found' });
        } else {
            this.setState({ pageHeaderText: 'Possible Patients' });
        }
        this.setState({ found_view: !this.state.found_view });
    }

    currentView() {
        const { goBack, navigate } = this.props.navigation;
        const { rowViewContainer } = stylesSheet;

        if (this.state.found_view) {
            return (
                <View>
                    <ListView
                        dataSource={this.state.allPatients}
                        renderSeparator={this.ListViewItemSeparator}
                        renderRow={(rowData) =>
                            <View>
                                <TouchableOpacity
                                    onPress={() => navigate('ExistingPatient')}
                                >
                                    <Text style={rowViewContainer}>
                                        {rowData.name}
                                    </Text>
                                    <Text style={rowViewContainer}>
                                        {rowData.dob}
                                    </Text>
                                    <Text style={rowViewContainer}>
                                        {rowData.address}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </View>
            );
        } else {
            return (
                <View>
                    <View style={[styles.container, { alignItems: 'center', padding: 0 }]}>
                        <TouchableOpacity style={styles.opacityContainer} onPress={() => goBack()}>
                            <Text style={styles.textStyle}>SEARCH AGAIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.opacityContainer}
                            onPress={() => navigate('NewPatient')}
                        >
                            <Text style={styles.textStyle}>{commonStrings.txtNewPatient}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        }
    }


    render() {
        const { container } = stylesSheet;

        return (
            <ScrollView style={container}>
                <View style={{ marginBottom: 10 }}>

                    <Text
                        style={styles.PageHeaderTextStyle}
                        onPress={this.updateHeaderText.bind(this)}
                    >
                        {this.state.pageHeaderText}
                    </Text>

                    <View>
                        {this.currentView()}
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const stylesSheet = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: ColorSchema.THEME_COLOR_TWO,
    },
    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 0,
        color: ColorSchema.THEME_COLOR_ONE,
    }
});
