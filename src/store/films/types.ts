export type Film = {
  id: string;
  name: string,
  lensId: string,
  createdAt: string
  iso?: number;
  image?: string,
}

export type FilmBody = {
  name: string;
  lensId: string;
  iso?: number;
  image?: string,
}

export type FilmsState = {
  films: Film[];
  activeFilm: Film | null;
  isLoading: boolean;
}

export const SET_FILMS = 'FILMS/SET_FILMS'
export const ADD_FILM = 'FILMS/ADD_FILM'
export const SET_FILMS_LOADING_STATUS = 'FILMS/SET_FILMS_LOADING_STATUS'
export const SET_ACTIVE_FILM = 'FILMS/SET_ACTIVE_FILM'

export type SetFilmsAction = {
  type: 'FILMS/SET_FILMS';
  payload: Film[];
}

export type AddFilmAction = {
  type: 'FILMS/ADD_FILM';
  payload: Film;
}

export type SetFilmsLoadingStatusAction = {
  type: 'FILMS/SET_FILMS_LOADING_STATUS',
  payload: boolean;
}

export type SetActiveFilmAction = {
  type: 'FILMS/SET_ACTIVE_FILM';
  payload: Film;
}


export type FilmsActionTypes =
  SetFilmsAction |
  AddFilmAction |
  SetFilmsLoadingStatusAction |
  SetActiveFilmAction
