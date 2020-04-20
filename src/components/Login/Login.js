import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import LoginForm from './LoginForm';
import * as firebase from 'firebase';

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    /*
    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.replace(user ? 'Login' : 'Timeline')
        });
    }
    */

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../Images/Sample.png')}>
                    </Image>
                    <Text style={styles.text}>Snapshots of your food life!</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm navigation={this.props.navigation} />
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffcc66'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 150,
        height: 150
    },
    text: {
        color: '#fff',
        marginTop: 10,
        width: 190,
        fontSize: 23,
        textAlign: 'center',
        opacity: 0.9
    }
});