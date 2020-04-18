import { User, SET_USER } from "./types";

const setUser = (user: User) => ({
  type: SET_USER,
  payload: user
})

export { setUser }
