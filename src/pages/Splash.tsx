import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Splash extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>PHEMORY</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", flex: 1 },
});
