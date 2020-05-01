import { 
  CamerasState,
  CamerasActionTypes,
  SET_CAMERAS,
  ADD_CAMERA,
  SET_CAMERAS_LOADING_STATUS,
  SET_ACTIVE_CAMERA
} from "./types";

const initialState: CamerasState = {
  cameras: [],
  activeCamera: null,
  isLoading: false
};

const camerasReducer = (
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
    case SET_ACTIVE_CAMERA: {
      return {
        ...state,
        activeCamera: action.payload
      }
    }
    default:
      return state;
  }
}

export default camerasReducer
