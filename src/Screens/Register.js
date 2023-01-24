import React, { Component } from 'react'
import { ImageBackground, StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import BottomSheet from '../Components/BottomSheet';
import bgImage from "../Assets/google.png";
import Words from '../Components/Words';
import stateContext from '../data/Context';

export class Register extends Component {
    static contextType = stateContext;

    render() {
        return (
            <ImageBackground source={bgImage} resizeMode={'center'}>
                {/* text */}
                <Words
                    main="Enter your mobile number"
                    sub="We'll send you an OTP for verify"
                />
                
                {/* bottom sheet */}
                <BottomSheet>
                    <View style={styles.mobile}>
                        <View style={styles.code}>
                            <Text style={styles.btnText}>+91</Text>
                        </View>
                        <TextInput keyboardType='phone-pad' maxLength={10} placeholder="Mobile number" style={styles.num} placeholderTextColor="#999" />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Continue</Text>
                    </TouchableOpacity>
                </BottomSheet>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    mobile: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    code: {
        height: 50,
        backgroundColor: "#062E40",
        justifyContent: "center",
        alignItems: "center",
        flex: .2,
        marginRight: 10,
        borderRadius: 3
    },
    num: {
        height: 50,
        width: 100,
        backgroundColor: "#062E40",
        flex: .8,
        borderRadius: 3,
        paddingLeft: 10,
        color: "#fff"
    },
    button: {
        height: 50,
        width: "100%",
        backgroundColor: "#00C458",
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        fontWeight: "500",
        color: "#fff"
    }
})

export default Register;