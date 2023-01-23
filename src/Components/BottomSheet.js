import { StyleSheet, Text, View, Dimensions, Animated, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get("window");

export class BottomSheet extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }
    }

    render() {
        return (
            <View style={{ height: SCREEN_HEIGHT, width: "100%" }}>
                {/* text */}
                <View style={{ position: "absolute", top: (SCREEN_HEIGHT + 40) - this.state.value , left: SCREEN_WIDTH / 4 }}>
                    <Text style={{ color: "#222", fontSize: 15, textAlign: "center" }}>Enter your mobile number</Text>
                    <Text style={{ color: "#555", fontSize: 12, textAlign: "center" }}>We'll send you an OTP verification code</Text>
                </View>

                <View style={styles.bottomSheetContainer} onLayout={(e) => this.setState({ value: e.nativeEvent.layout.height })}>
                    <Text style={styles.line}>hello</Text>
                    {/* down box */}
                    <View style={styles.mobile}>
                        <View style={styles.code}>
                            <Text style={styles.btnText}>+91</Text>
                        </View>
                        <TextInput keyboardType='phone-pad' maxLength={10} placeholder="Mobile number" style={styles.num} placeholderTextColor="#999" />
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.btnText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT / 2,
        width: "100%",
        backgroundColor: "#002333",
        position: 'absolute',
        top: SCREEN_HEIGHT - 200,
        borderRadius: 25,
        padding: 10
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: "grey",
        color: "grey",
        alignSelf: "center",
        marginVertical: 15
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

export default BottomSheet