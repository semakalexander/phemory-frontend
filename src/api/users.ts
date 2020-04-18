import axios from "axios";
import { User } from "../store/auth/types";

const createUser: (data: User) => Promise<void> = async (data) => {
  try {
    await axios.post("/users", data);
  } catch (error) {
    console.log(error);
  }
};

const getUser: (id: string) => Promise<User> = async (id) => {
  try {
    const result:User = await axios.get("/users/" + id);

    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { createUser, getUser };
