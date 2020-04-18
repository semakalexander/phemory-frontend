import axios from "axios";
import { Camera } from "../store/cameras/types";

const createCamera: (data: Camera) => Promise<Camera> = async (data) => {
  try {
    const { data: camera } = await axios.post("/cameras", data);

    return camera as Camera;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getCameras: () => Promise<Camera[] | null> = async () => {
  try {
    const { data: { cameras } } = await axios.get("/cameras");

    return cameras as Camera[];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { createCamera, getCameras };
