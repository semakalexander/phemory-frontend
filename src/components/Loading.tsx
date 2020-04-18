import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> loading... </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height
  }
})