import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-paper';

import fbaseConfig from '../../fbaseConfig';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

        this.registerPress = this.registerPress.bind(this);
        this.loginPressed = this.loginPressed.bind(this);
    }

    registerPress() {
        this.props.navigation.navigate('Registration');
    }
    loginPressed() {
        fbaseConfig.login(this.state.email, this.state.password);
        //this.props.navigation.replace('Timeline');
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="rgba(255,255,255,1)"
                    onChangeText={(text) => this.setState({ email: text })}
                    style={styles.input}>

                </TextInput>

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry
                    onChangeText={(text) => this.setState({ password: text })}
                    style={styles.input}>
                </TextInput>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.loginPressed}>
                    <Text
                        style={styles.buttonText}
                    >LOGIN</Text>
                </TouchableOpacity>

                <Button
                    mode="contained"
                    color='white'
                    onPress={this.registerPress}
                    style={styles.forgotContainer}>
                    <Text
                        style={styles.forgotButton}>
                        REGISTER
                    </Text>
                </Button>

            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.3)',
        marginBottom: 20,
        color: '#FFF',
        paddingHorizontal: 10,
        fontSize: 16,
        fontWeight: '100'
    },
    buttonContainer: {
        backgroundColor: '#33ccff',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFF',
        fontWeight: '700'
    },
    forgotContainer: {
        marginTop: 10,
        opacity: .9
    },
    forgotButton: {
    }
})