import React, { Component } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class ImageSelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            avatarSource: null
        }
    }

    selectImage = () => {
        ImagePicker.showImagePicker({ noData: true, mediaType: 'photo' }, (response) => {
            console.log('Response = ' + response);

            if (response.didCancel) {
                console.log('User canceled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ' + response.error);
            } else if (response.custonButton) {
                console.log('User tapped custom button: ' + response.custonButton);
            } else {
                this.setState({ avatarSource: response.uri });
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.avatarSource && <Image source={{ uri: this.state.avatarSource }} style={{ width: '80%', height: 200, resizeMode: 'contain' }} />
                }
                <Button title="Select Image" onPress={this.selectImage}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})