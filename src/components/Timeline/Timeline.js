
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import TabBar from '../TabBar';
import ImageSelector from '../ImageSelector';

export default class Timeline extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            //<TabBar/>
            <ImageSelector/>
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
