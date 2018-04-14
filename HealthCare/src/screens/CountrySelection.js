import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
} from 'react-native';
import ManageDB from '../database/ManageDB';
import { styles } from '../res';
import * as ColorSchema from '../res/ColorSchema';

//Make object of Database
const manageDatabase = new ManageDB();
const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class CountrySelection extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      countriesList: ds,
    };
  }

  componentDidMount() {
    const responseJson = manageDatabase.getCountriesList();
    if (responseJson != null) {
      this.setState({
        isLoading: false,
        countriesList: ds.cloneWithRows(responseJson),
      }, () => {
        // In this block you can do something with new state.
      });
    }
  }

  SelectCountry = (country, navigator) => {
    console.log(
      'Health Care',
      'Country Name: ', country.country_name,
      '\nCountry Code: ', country.country_code,
      '\nIs Accessible:', country.is_accessible
    );
    navigator.navigate('HomeScreen');
  }

  render() {
    const { listContainer, rowViewContainer, textLink } = stylesSheet;

    return (
      <View style={styles.container}>

        <Text style={styles.PageHeaderTextStyle}>Select a Country</Text>

        <View style={listContainer}>
          <ListView
            dataSource={this.state.countriesList}
            renderSeparator={this.ListViewItemSeparator}
            renderRow={(rowData) =>
              <View>
                <Text
                  style={rowViewContainer}
                  onPress={this.SelectCountry.bind(this, rowData, this.props.navigation)}
                >
                  {
                    rowData.country_name + (
                      (rowData.is_accessible === true) ? ' (Accessible)' : ' (No Access)'
                    )
                  }
                </Text>
                {
                  (rowData.country_code !== 'code9') ?
                    <View
                      style={[styles.bottomLineStyle, { marginBottom: 0 }]}
                    />
                    : <View />
                }

              </View>
            }
          />
        </View>
        <Text style={textLink}>
          Request access to countries
        </Text>
      </View>
    );
  }
}

const stylesSheet = StyleSheet.create({
  listContainer: {
    margin: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: ColorSchema.LIGHT_BLUE,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#009fff',
  },
  rowViewContainer: {
    color: ColorSchema.THEME_COLOR_ONE,
    fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'flex-start'
  },
  textLink: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontSize: ColorSchema.THEME_FONT_SIZE_ONE,
    color: ColorSchema.THEME_COLOR_ONE,
    includeFontPadding: true,
    textDecorationLine: 'underline',
  }
});
