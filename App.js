import * as firebase from 'firebase';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Constants from 'expo-constants';

import Navigator from './routes/homestack'; //implement <Navbar/> in render

import fbaseConfig from './src/fbaseConfig';
fbaseConfig.init();


export default class App extends React.Component {
  constructor(props) {
    super(props);
    };

    render(){
      return(
          <Navigator/>
      )
    }
  }

const styles = StyleSheet.create({

});
