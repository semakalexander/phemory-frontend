import React, { useCallback, useEffect, SFC } from "react";
import { useDispatch } from "react-redux";

import { Text, View, StyleSheet } from "react-native";

import { setUser } from "../store/auth/actions";

import * as facebook from "../api/facebook";

import { SplashNavigationProp } from "../types/navigation";

interface ISignInProps {
  navigation: SplashNavigationProp;
}

const Splash: SFC<ISignInProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const signIn = useCallback(async () => {
    const user = await facebook.signIn();

    if (!user) {
      return navigation.navigate('SignIn')
    }

    dispatch(setUser(user));

    navigation.navigate('ChooseCamera')
  }, [dispatch])

  useEffect(() => {
    signIn()
  }, [signIn])

  return (
    <View style={styles.container}>
      <Text>PHEMORY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", flex: 1 },
});


export default Splash
