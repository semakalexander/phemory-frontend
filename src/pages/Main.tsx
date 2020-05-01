import React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from "./Splash";
import SignIn from "./SignIn";
import ChooseCamera from "./ChooseCamera";
import AddCamera from "./AddCamera";
import ChooseLens from "./ChooseLens";
import ChooseFilm from "./ChooseFilm";
import AddLens from "./AddLens";
import AddFilm from "./AddFilm";

type RootStackParamList = {
  Splash: undefined;
  SignIn: undefined;
  ChooseCamera: undefined;
  AddCamera: undefined;
  ChooseLens: undefined;
  AddLens: undefined;
  ChooseFilm: undefined;
  AddFilm: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>()

const Main = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <RootStack.Navigator initialRouteName="Splash">
          <RootStack.Screen name="Splash" component={Splash} />
          <RootStack.Screen name="SignIn" component={SignIn} />
          <RootStack.Screen name="ChooseCamera" component={ChooseCamera} />
          <RootStack.Screen name="AddCamera" component={AddCamera} />
          <RootStack.Screen name="ChooseLens" component={ChooseLens} />
          <RootStack.Screen name="AddLens" component={AddLens} />
          <RootStack.Screen name="ChooseFilm" component={ChooseFilm} />
          <RootStack.Screen name="AddFilm" component={AddFilm} />
        </RootStack.Navigator>
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export { RootStackParamList }
export default Main;
