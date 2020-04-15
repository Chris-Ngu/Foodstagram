import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                <Text style={styles.title}>Timeline Screen</Text>
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
});