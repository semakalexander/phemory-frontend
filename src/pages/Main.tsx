import React, { Component, useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider, useSelector, useDispatch } from "react-redux";

import Splash from "./Splash";
import SignIn from "./SignIn";
import ChooseCamera from "./ChooseCamera";

import useTimeout from "../hooks/useTimeout";

import { useTypedSelector } from "../store";
import { setUser } from "../store/auth/actions";
import * as facebook from "../api/facebook";

const Main = () => {
  const [isSplashShowing, setIsSplashShowing] = useState<boolean>(true);
  const dispatch = useDispatch();

  const signIn = useCallback(async () => {
    const user = await facebook.signIn();

    dispatch(setUser(user));

    setIsSplashShowing(false)
  }, [dispatch])

  useEffect(() => {
    signIn()
  }, [signIn])

  const { user } = useTypedSelector((state) => state.auth);

  if (isSplashShowing) {
    return <Splash />;
  }

  return (
    <View style={styles.container}>
      {!user && <SignIn />}
      {user && <ChooseCamera />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Main;
