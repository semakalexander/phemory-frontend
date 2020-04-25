import {
  Camera,
  SET_CAMERAS,
  ADD_CAMERA,
  SET_CAMERAS_LOADING_STATUS,
  SET_ACTIVE_CAMERA,
  SetCamerasAction,
  AddCameraAction,
  SetCamerasLoadingStatusAction,
  SetActiveCameraAction,
} from "./types";

const setCameras: (cameras: Camera[]) => SetCamerasAction = (cameras) => ({
  type: SET_CAMERAS,
  payload: cameras,
});

const addCamera: (camera: Camera) => AddCameraAction = (camera) => ({
  type: ADD_CAMERA,
  payload: camera,
});

const setCamerasLoadingStatus: (
  status: boolean
) => SetCamerasLoadingStatusAction = (status) => ({
  type: SET_CAMERAS_LOADING_STATUS,
  payload: status,
});

const setActiveCamera: (camera: Camera) => SetActiveCameraAction = (
  camera
) => ({
  type: SET_ACTIVE_CAMERA,
  payload: camera,
});

export { setCameras, addCamera, setCamerasLoadingStatus, setActiveCamera };
