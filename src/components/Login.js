import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Login extends React.Component {
    constructor(props){
        super(props);

        this.onPress = this.onPress.bind(this);
    }
    onPress(){
        this.props.navigation.navigate('Timeline');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Login Screen</Text>
                    <Button title='go to timeline' onPress={this.onPress} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

    },
    titleContainer: {

    },
    title: {

    }
})