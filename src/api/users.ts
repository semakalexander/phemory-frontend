import axios from "axios";
import { User } from "../store/auth/types";

const createUser: (data: User) => Promise<User> = async (data) => {
  try {
    const { data: user } = await axios.post("/users", data);

    return user as User;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getUser: (id: string) => Promise<User> = async (id) => {
  try {
    const { data } = await axios.get("/users/" + id);

    return data as User;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { createUser, getUser };
