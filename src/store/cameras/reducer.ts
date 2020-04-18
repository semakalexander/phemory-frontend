import { 
  CamerasState,
  CamerasActionTypes,
  SET_CAMERAS,
  ADD_CAMERA,
  SET_CAMERAS_LOADING_STATUS
} from "./types";

const initialState: CamerasState = {
  cameras: [],
  isLoading: false
};

const authReducer = (
  state = initialState,
  action: CamerasActionTypes
): CamerasState => {
  switch (action.type) {
    case SET_CAMERAS: {
      return {
        ...state,
        cameras: action.payload
      };
    }
    case ADD_CAMERA: {
      return {
        ...state,
        cameras: [...state.cameras, action.payload]
      };
    }
    case SET_CAMERAS_LOADING_STATUS: {
      return {
        ...state,
        isLoading: action.payload
      };
    }
    default:
      return state;
  }
}

export default authReducer
