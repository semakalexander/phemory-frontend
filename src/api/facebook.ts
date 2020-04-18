import axios from "axios";

import * as ExpoFacebook from "expo-facebook";

import * as usersApi from './users'

import { stringifyQuery } from "../helpers/api";
import { omit } from "../helpers/common";
import { User } from "../store/auth/types";
import { PHEMORY_APP_ID, PHEMORY_APP_NAME } from "../keys"

const FACEBOOK_API_BASE_URL = "https://graph.facebook.com";

const DEFAULT_PERMISSIONS = ["email", "user_birthday", "user_gender"];
const DEFAULT_FIELDS = [
  "id",
  "birthday",
  "email",
  "first_name",
  "last_name",
  "gender",
];


interface IGetUser {
  accessToken: string;
  fields?: [string];
}

interface IFacebookLoginResultData {
  id: string;
  email: string;
  birthday: string;
  first_name: string;
  last_name: string;
  gender: string;
}

interface IFacebookLoginResult {
  data: IFacebookLoginResultData;
}

const getUser: (params: IGetUser) => Promise<IFacebookLoginResult> = async ({
  accessToken,
  fields = DEFAULT_FIELDS,
}) => {
  const result: IFacebookLoginResult = await axios.get(
    stringifyQuery(`${FACEBOOK_API_BASE_URL}/me`, {
      fields: fields.join(","),
      access_token: accessToken,
    })
  );

  return result;
};

const signIn: () => Promise<User | null> = async () => {
  try {
    await ExpoFacebook.initializeAsync(PHEMORY_APP_ID, PHEMORY_APP_NAME);

    const logInResult = await ExpoFacebook.logInWithReadPermissionsAsync({
      permissions: DEFAULT_PERMISSIONS,
    });

    switch (logInResult.type) {
      case "success":
        const { data } = await getUser({ accessToken: logInResult.token });

        const user = omit({
          ...data,
          facebookId: data.id,
          firstName: data.first_name,
          lastName: data.last_name,
        }, ['id', 'first_name', 'last_name']) as User;

        usersApi.createUser(user);

        return user;
      case "cancel":
        return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { DEFAULT_PERMISSIONS, DEFAULT_FIELDS, getUser, signIn };
