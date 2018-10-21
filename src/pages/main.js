import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet
} from "react-native";

import api from "../services/api";

export default class Main extends Component {
  // para mudar o titulo default
  static navigationOptions = {
    title: "Listagem de produtos"
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

  renderItem = ({ item }) => {
    return (
      <View style={style.productContainer}>
        <Text style={style.productTitle}>{item.title}</Text>
        <Text style={style.productDescription}>{item.description}</Text>

        <TouchableOpacity
          style={style.productButton}
          onPress={() => {
            console.log(`Clicou em ${item.title}`);
          }}
        >
          <Text style={style.productButtonTitle}>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={style.container}>
        <FlatList
          contentContainerStyle={style.list}
          data={this.state.docs}
          keyExtractor={item => item._id}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA"
  },

  list: {
    padding: 20
  },

  productContainer: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    padding: 20,
    marginBottom: 20
  },

  productTitle: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 18
  },

  productDescription: {
    marginTop: 5,
    lineHeight: 24,
    fontSize: 16,
    color: "#999"
  },

  productButton: {
    height: 45,
    borderColor: "#DA552F",
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: "transparent",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },

  productButtonTitle: {
    fontSize: 16,
    color: "#DA552F",
    fontWeight: "bold"
  }
});
