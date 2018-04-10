import React, { Component } from 'react';
import { 
  StyleSheet,
  ActivityIndicator, 
  ListView, 
  Text, 
  View, 
  Alert 
} from 'react-native';
import ManageDB from '../database/ManageDB';

const manageDatabase = new ManageDB();

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

export default class UsersList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      allUsers: ds,
    };
  }

  componentDidMount() {
    const responseJson = manageDatabase.getAllUsers();
    if (responseJson != null) {
      this.setState({
        isLoading: false,
        allUsers: ds.cloneWithRows(responseJson),
      }, () => {
        // In this block you can do something with new state.
      });
    }
  }

  getItem(user) {
    Alert.alert('Health Care', 'First Name: ', user.first_name);
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
    const { mainContainer, rowViewContainer, } = stylesSheet;

    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (

      <View style={mainContainer}>

        <ListView
          dataSource={this.state.allUsers}
          renderSeparator={this.ListViewItemSeparator}
          renderRow={(rowData) =>
            <Text style={rowViewContainer} onPress={this.getItem.bind(this, rowData)}>
              {rowData.first_name}
            </Text>}
        />
      </View>
    );
  }
}

const stylesSheet = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10
  },
  rowViewContainer: {
    fontSize: 20,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  }
});
