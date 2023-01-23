import React, { Component } from 'react'
import { ImageBackground, View, StyleSheet, Dimensions, TextInput, Text, TouchableOpacity } from 'react-native';

const {width, height} = Dimensions.get("screen");

export class Register extends Component {
    render() {
        return (
            <ImageBackground 
            source={{ uri: "https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3.png"}}
            resizeMode={'stretch'}
            style={styles.bg}>

                {/* text */}
                <View style={styles.instruction}>
                    <Text style={{color: "#fff", fontSize: 15, textAlign: "center"}}>Enter your mobile number</Text>
                    <Text style={{ color: "#d0d0d0", fontSize: 12, textAlign: "center" }}>We'll send you an OTP verification code</Text>
                </View>

                {/* down box */}
                <View style={styles.box}>
                    <View style={styles.mobile}>
                        <View style={styles.code}>
                            <Text style={styles.btnText}>+91</Text>
                        </View>
                        <TextInput keyboardType='phone-pad' maxLength={10} placeholder="Mobile number" style={styles.num} placeholderTextColor="#999"/>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
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
        position: 'absolute',
        bottom: 0,
        alignItems: "center",
        padding: 20,
        paddingVertical: 30
    },
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