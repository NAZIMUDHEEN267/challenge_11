import { Text, View, StyleSheet, StatusBar, ImageBackground, KeyboardAvoidingView } from 'react-native'
import React, { Component } from 'react'
import BottomSheet from '../Components/BottomSheet';
import bgImage from "../Assets/google.png"
import { ScrollView } from 'react-native-gesture-handler';

export class Otp extends Component {
    render() {
        return (
            <KeyboardAvoidingView>
                <ScrollView>
                    <ImageBackground source={bgImage} style={styles.container} resizeMode={'center'}>
                        <StatusBar barStyle='light-content' />
                        <BottomSheet />
                    </ImageBackground>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: 'center'
    }
})

export default Otp