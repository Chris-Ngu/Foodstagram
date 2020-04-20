import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-paper';

import fbconfig from '../../fbaseConfig';



export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            email: 'test',
            password: '',
            confirmPassword: '',
            errorMessage: null
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        fbconfig.register(this.state.email, this.state.password);
        //Handle errors here
        this.props.navigation.pop();

        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Username"
                    onChangeText={(text) => this.setState({username: text})}
                    placeholderTextColor="rgba(255,255,255,1)"
                    style={styles.input}>

                </TextInput>
                <TextInput
                    placeholder="E-mail"
                    onChangeText={(text) => this.setState({email: text})}
                    placeholderTextColor="rgba(255,255,255,1)"
                    style={styles.input}>

                </TextInput>

                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    onChangeText={(password) => this.setState({password: password})}
                    secureTextEntry
                    style={styles.input}>
                </TextInput>
                <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    onChangeText={confirmPassword => this.setState({ confirmPassword: confirmPassword })}
                    secureTextEntry
                    style={styles.input}>
                </TextInput>


                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.onSubmit}>
                    <Text
                        style={styles.buttonText}>
                        REGISTER
                        </Text>
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