import axios from "axios";
import { Lens } from "../store/lenses/types";

const createLens: (data: Lens) => Promise<Lens | null> = async (data) => {
  try {
    const { data: lens } = await axios.post("/lenses", data);

    return lens as Lens;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getLenses: (cameraId: string) => Promise<Lens[] | null> = async (cameraId) => {
  try {
    const { data: { lenses } } = await axios.get("/lenses", { params: { cameraId } });

    return lenses as Lens[];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { createLens, getLenses };
