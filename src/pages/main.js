import React, { Component } from "react";
import { View, Text } from "react-native";

import api from "../services/api";

export default class Main extends Component {
  // para mudar o titulo default
  static navigationOptions = {
    title: "JSHunt"
  };

  state = {
    docs: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get("/products");
    const { docs } = response.data;
    this.setState({ docs });

    console.log(docs);
  };

  render() {
    return (
      <View>
        <Text>Página Main </Text>
        {this.state.docs.map(product => (
          <Text key={product._id}>{product.title}</Text>
        ))}
      </View>
    );
  }
}