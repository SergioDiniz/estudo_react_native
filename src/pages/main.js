import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Main extends Component {
  // para mudar o titulo default
  static navigationOptions = {
    title: "JSHunt"
  }
  render() {
    return (
      <View>
        <Text> Página Main </Text>
      </View>
    );
  }
}
