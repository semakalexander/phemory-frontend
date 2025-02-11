import { StackNavigationProp } from "@react-navigation/stack/lib/typescript/src/types";
import { RootStackParamList } from "../pages/Main";


export type SplashNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Splash'
>;


export type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'SignIn'
>;

export type ChooseCameraScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChooseCamera'
>;

export type AddCameraScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddCamera'
>;

export type ChooseLensScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChooseLens'
>;

export type AddLensScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddLens'
>;

export type ChooseFilmScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ChooseFilm'
>;

export type AddFilmScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'AddFilm'
>;
