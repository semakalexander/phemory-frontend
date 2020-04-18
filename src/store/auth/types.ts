export type User = {
  id: string;
  facebookId: string;
  firstName: string;
  lastName: string;
  email: string;
  birthday?: string;
  gender?: string;
  avatar?: string;
  token?: string;
} | null

export interface AuthState {
  user: User;
}

export const SET_USER = "AUTH/SET_USER";

interface SetUserAction {
  type: "AUTH/SET_USER";
  payload: User;
}

export type AuthActionTypes = SetUserAction;
