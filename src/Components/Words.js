import React, { Component } from 'react'
import { StyleSheet, Dimensions, Text, View } from 'react-native';

const { width } = Dimensions.get("window");

export class Words extends Component {
  constructor(props) {
    super(props);

    this.main = this.props.main;
    this.sub = this.props.sub || "";
  }

  render() {
    return (
      <View style={{position: "absolute",  top: "30%", width: "100%"}}>
        <Text style={[styles.bold, styles.text]}>{this.main}</Text>
        <Text style={[styles.light, styles.text]}>{this.sub}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "500",
    fontSize: 16,
    color: "#222"
  },
  light: {
    fontSize: 13,
    fontWeight: "500",
    color: "#999"
  },
  text: {
    textAlign: "center"
  }
})

export default Words