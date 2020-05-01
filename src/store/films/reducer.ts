import {
  FilmsState,
  FilmsActionTypes,
  SET_FILMS,
  ADD_FILM,
  SET_FILMS_LOADING_STATUS,
  SET_ACTIVE_FILM
} from "./types";

const initialState: FilmsState = {
  films: [],
  activeFilm: null,
  isLoading: false
};

const filmsReducer = (
  state = initialState,
  action: FilmsActionTypes
): FilmsState => {
  switch (action.type) {
    case SET_FILMS: {
      return {
        ...state,
        films: action.payload
      };
    }
    case ADD_FILM: {
      return {
        ...state,
        films: [...state.films, action.payload]
      };
    }
    case SET_FILMS_LOADING_STATUS: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_ACTIVE_FILM: {
      return {
        ...state,
        activeFilm: action.payload
      }
    }
    default:
      return state;
  }
}

export default filmsReducer
