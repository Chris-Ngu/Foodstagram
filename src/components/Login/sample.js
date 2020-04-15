import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import LoginForm from './LoginForm';

export default class sample extends Component {
    constructor(props) {
        super(props);
    }

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
                    <LoginForm />
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    text: {
        color: '#fff',
        marginTop: 10,
        width: 190,
        fontSize: 15,
        textAlign: 'center',
        opacity: 0.9
    }
});