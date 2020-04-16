import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.registerPress = this.registerPress.bind(this);
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }


        this.setState({
            username: '',
            password: ''
        })

    }

    registerPress() {
        this.props.navigation.navigate('Registration');
    }


    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    placeholder="Username"
                    placeholderTextColor="rgba(255,255,255,1)"
                    onChange={this.onChangeUsername}
                    style={styles.input}>

                </TextInput>
                <TextInput
                    placeholder="Password"
                    placeholderTextColor="rgba(255,255,255,1)"
                    secureTextEntry
                    onChange={this.onChangePassword}
                    style={styles.input}>
                </TextInput>

                <TouchableOpacity style={styles.buttonContainer} onPress={this.onSubmit}>
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