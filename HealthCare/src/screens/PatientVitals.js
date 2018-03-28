import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text
} from 'react-native';
import { 
    Table, 
    TableWrapper, 
    Row, 
    Col, 
    Cell 
} from 'react-native-table-component';
import { styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';

const tableHead = ['Head2'];
const tableData = [[1], [2], [3], [4], [5], [6], [7], [8]];
const tableTitle = [
        'Blood Pressure',
        'Heart Rate', 
        'Weight', 
        'Waist Circumference', 
        'SpO2', 
        'F.E.V',
        'Cholesterol',
        'Blood Glucose'];
const widthArr = [60];
const heightArr = [40, 40, 40, 40, 40, 40, 40, 40];
const { table, head, headText, title, titleText, list, listText } = stylesSheet;

export default class PatientVitals extends Component {
    createButtons() {
        const buttons = [];
        for (let j = 0; j < 10; j++) {
            buttons.push(
                <TableWrapper borderStyle={{ borderWidth: 1, borderColor: '#000' }}>
                    <Row data={tableHead} style={head} textStyle={headText} widthArr={widthArr} />
                    {
                        tableData.map((data, i) => (
                            <Row 
                                key={i} 
                                data={data} 
                                style={list}
                                textStyle={listText} widthArr={widthArr} 
                            />
                        ))
                    }
                </TableWrapper>
            );
        }
        return buttons;
    }

    render() {
        return (
            <View style={[styles.container, { justifyContent: 'flex-start' }]}>
                <Text style={styles.text}>John Smith Vitals</Text>

                <Table style={table}>
                    {/* Left Wrapper */}
                    <TableWrapper style={{ width: 100 }}>
                        <Cell data="" style={head} textStyle={headText} />
                        <TableWrapper style={{ flexDirection: 'row' }}>
                            <Col 
                                data={tableTitle} 
                                style={title} 
                                heightArr={heightArr} 
                                textStyle={titleText}
                            />
                        </TableWrapper>
                    </TableWrapper>

                    {/* Right scrollview Wrapper */}
                    <ScrollView 
                        horizontal={true}
                    >
                        {
                            this.createButtons()
                        }
                    </ScrollView>
                </Table>
            </View>
        );
    }

}


const stylesSheet = StyleSheet.create({
    table: {
        width: 380,
        flexDirection: 'row',
    },
    head: {
        height: 40,
        backgroundColor: /*'#333'*/ ColorSchema.THEME_COLOR_SIX,
    },
    headText: {
        textAlign: 'center',
        color: ColorSchema.THEME_COLOR_ONE,
    },
    title: {
        flex: 2,
        backgroundColor: ColorSchema.THEME_COLOR_SIX,
    },
    titleText: {
        marginLeft: 6,
        color: '#fff',
    },
    listText: {
        textAlign: 'right',
        marginRight: 6,
    },
    list: {
        height: 40,
        backgroundColor: '#f0f0f0',
    },

});
