import {
  Film,
  SET_FILMS,
  ADD_FILM,
  SET_FILMS_LOADING_STATUS,
  SET_ACTIVE_FILM,
  SetFilmsAction,
  AddFilmAction,
  SetFilmsLoadingStatusAction,
  SetActiveFilmAction,
} from "./types";

const setFilms: (films: Film[]) => SetFilmsAction = films => ({
  type: SET_FILMS,
  payload: films,
});

const addFilm: (lens: Film) => AddFilmAction = film => ({
  type: ADD_FILM,
  payload: film,
});

const setFilmsLoadingStatus: (
  status: boolean
) => SetFilmsLoadingStatusAction = status => ({
  type: SET_FILMS_LOADING_STATUS,
  payload: status,
});

const setActiveFilm: (film: Film) => SetActiveFilmAction = (
  film
) => ({
  type: SET_ACTIVE_FILM,
  payload: film,
});

export { setFilms, addFilm, setFilmsLoadingStatus, setActiveFilm };
