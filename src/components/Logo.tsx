import React, { SFC } from "react";
import { View, Text, StyleSheet } from "react-native";

interface ILogoProps {
  style: any;
}

const Logo: SFC<ILogoProps> = ({ style }) => {
  return (
    <View style={style}>
      <Text style={styles.text}>PHEMORY</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: { color: "#fff" }
});

export default Logo;
