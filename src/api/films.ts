import axios from "axios";
import { Film, FilmBody } from "../store/films/types";

const createFilm: (data: FilmBody) => Promise<Film | null> = async (data) => {
  try {
    const { data: film } = await axios.post("/films", data);

    return film as Film;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getFilms: (lensId: string) => Promise<Film[] | null> = async (lensId) => {
  try {
    const { data: { films } } = await axios.get("/films", { params: { lensId } });

    return films as Film[];
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { createFilm, getFilms };
