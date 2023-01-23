import React, { Component } from 'react'
import {
    ImageBackground,
    View,
    StyleSheet,
    Dimensions,
    TextInput,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
// import { KeyboardAvoidingView } from 'react-native';
import bgImage from "../Assets/google.png";

const { width, height } = Dimensions.get("screen");

export class Register extends Component {
    render() {
        return (
            <KeyboardAvoidingView>
                <ScrollView>
           

        
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        height,
        width
    },
    instruction: {
        position: "absolute",
        top: "55%",
        left: "30%"
    },
    box: {
        height: "34%",
        width,
        borderTopStartRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#002333",
        position: "absolute",
        bottom: 0,
        alignItems: "center",
        padding: 20,
        paddingVertical: 30
    },
   
})

export default Register;