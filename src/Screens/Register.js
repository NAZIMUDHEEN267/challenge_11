import React, { Component } from 'react'
import { ImageBackground, View, StyleSheet, Dimensions } from 'react-native';

const {width, height} = Dimensions.get("screen");

export class Register extends Component {
    render() {
        return (
            <ImageBackground 
            source={{ uri: "https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3.png"}}
            resizeMode={'stretch'}
            style={styles.bg}>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        height,
        width
    }
})

export default Register;