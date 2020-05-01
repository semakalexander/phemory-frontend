import { 
  LensesState,
  LensesActionTypes,
  SET_LENSES,
  ADD_LENS,
  SET_LENSES_LOADING_STATUS,
  SET_ACTIVE_LENS
} from "./types";

const initialState: LensesState = {
  lenses: [],
  activeLens: null,
  isLoading: false
};

const lensesReducer = (
  state = initialState,
  action: LensesActionTypes
): LensesState => {
  switch (action.type) {
    case SET_LENSES: {
      return {
        ...state,
        lenses: action.payload
      };
    }
    case ADD_LENS: {
      return {
        ...state,
        lenses: [...state.lenses, action.payload]
      };
    }
    case SET_LENSES_LOADING_STATUS: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    case SET_ACTIVE_LENS: {
      return {
        ...state,
        activeLens: action.payload
      }
    }
    default:
      return state;
  }
}

export default lensesReducer
