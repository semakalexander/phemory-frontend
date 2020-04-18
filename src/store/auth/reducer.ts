import { AuthState, AuthActionTypes, SET_USER } from "./types";

const initialState: AuthState = {
  user: null
};

const authReducer = (
  state = initialState,
  action: AuthActionTypes
): AuthState => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
}

export default authReducer
