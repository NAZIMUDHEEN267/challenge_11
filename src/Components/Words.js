import React, { Component } from 'react'
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import Context from "../data/Context";

const { width } = Dimensions.get("window");

export class Words extends Component {
  constructor(props) {
    super(props);

    this.main = this.props.main;
    this.sub = this.props.sub;
  }

  static contextType = Context;

  render() {
    return (
      <View style={{position: "absolute", left: width / 4, top: this.context.regText}}>
        <Text style={[styles.bold, styles.text]}>{this.main}</Text>
        <Text style={[styles.light, styles.text]}>{this.sub}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  bold: {
    fontWeight: "600",
    fontSize: 16,
    color: "#222"
  },
  light: {
    fontSize: 13,
    fontWeight: "500",
    color: "#999"
  }
})

export default Words