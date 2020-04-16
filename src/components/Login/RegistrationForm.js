import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-paper';


const bcrypt = require('bcrypt');

export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            email: '',
            password: '',
            errorMessage: null
        };

    }

    onChangeUsername(e) {
        this.setState({ username: e.target.value });
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value });
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('Login'))
            .catch(error => this.setState({ errorMessage: error.message }));

        this.setState({
            username: '',
            email: '',
            password: ''
        });

    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,1)"
                    style={styles.input}>

                </TextInput>
                <TextInput
                    placeholder="E-mail"
                    placeholderTextColor="rgba(255,255,255,1)"
                    style={styles.input}>

                </TextInput>

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry
                    style={styles.input}>
                </TextInput>
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry
                    style={styles.input}>
                </TextInput>


                <TouchableOpacity style={styles.buttonContainer} onPress={this.onSubmit}>
                    <Text
                        style={styles.buttonText}
                    >REGISTER</Text>
                </TouchableOpacity>


            </View>
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
        paddingVertical: 15,
        transform: []
    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFF',
        fontWeight: '700'
    }
})