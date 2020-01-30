import React, { Component } from "react";

import Router from "./navigation/rootNavigation";
import { View, StyleSheet } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f122",
    justifyContent: "center"
  }
});
