import React, { SFC, useCallback } from "react";
import { useDispatch } from "react-redux";

import { View, Text, StyleSheet, ImageBackground, Button } from "react-native";

import * as facebookApi from "../api/facebook";

import Logo from "../components/Logo";
import { setUser } from "../store/auth/actions";

import { SignInScreenNavigationProp } from "../types/navigation";

const bgImg = {
  uri:
    "https://images.unsplash.com/photo-1585811662150-cd7a8590ca3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2495&q=80",
};

interface ISignInProps {
  navigation: SignInScreenNavigationProp
}


const SignIn: SFC<ISignInProps> = ({ navigation }) => {
  const dispatch = useDispatch();

  const signIn = useCallback(async () => {
    const user = await facebookApi.signIn();

    if (!user) {
      return;
    }

    dispatch(setUser(user));

    navigation.navigate('ChooseCamera')
  }, [dispatch]);

  return (
    <ImageBackground source={bgImg} style={styles.background}>
      <Logo style={styles.logo} />

      <Text style={styles.header}>Sign In</Text>

      <View style={styles.inputs}>
        <View style={styles.signInBtn}>
          <Button title="Sign in via facebook" onPress={signIn} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  logo: {
    marginTop: 60,
  },
  header: { fontSize: 40, color: "#fff", marginTop: 80 },
  inputs: {
    marginTop: 40,
    padding: 20,
    backgroundColor: "#fff",
    width: 180,
  },
  input: {
    borderBottomWidth: 1,
  },
  inputContainer: {
    marginTop: 20,
  },
  signInBtn: {
    marginTop: 20,
  },
});

export default SignIn;
