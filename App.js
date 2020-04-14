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

    this.state = {
      message: '',
      messages: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  componentDidMount() {
    //Initially gets messages
    firebase
      .database()
      .ref()
      .child("messages")
      .once('value', snapshot => {
        const data = snapshot.val()
        if (snapshot.val()) {
          const initMessages = [];
          Object.keys(data).forEach(message => initMessages.push(data[message]));
          this.setState({ messages: initMessages });
        }
      });

    //Listener to check if more messages were added
    firebase
      .database()
      .ref()
      .child("messages")
      .on("child_added", snapshot => {
        const data = snapshot.val();
        if (data) {
          this.setState(prevState => ({
            messages: [data, ...prevState.messages]
          }))
        }
      })
  }

  addItem() {
    if (!this.state.message) return;

    const newMessage = firebase.database().ref()
      .child("messages")
      .push();
    newMessage.set(this.state.message, () => this.setState({ message: '' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.msgBox}>
          <TextInput placeholder='Enter message here' style={styles.txtInput} onChangeText={(text) => this.setState({ message: text })} />
          <Button title='Send' onPress={this.addItem} />
        </View>
        <FlatList data={this.state.messages}
          renderItem={
            ({ item }) =>
              <View style={styles.listItemContainer}>
                <Text style={styles.listItem}>
                  {item}
                </Text>
              </View>
          }

        />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    marginTop: Constants.statusBarHeight
  },
  msgBox: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: '#fff'
  },
  txtInput: {
    flex: 1
  },
  listItemContainer: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5
  },
  listItem: {
    fontSize: 20,
    padding: 10
  }
});
