export type Camera = {
  id: string;
  name: string,
  image?: string,
  userId: string,
  createdAt?: string
}

export type CamerasState = {
  cameras: Camera[];
  activeCamera: Camera | null;
  isLoading: boolean;
}

export const SET_CAMERAS = 'CAMERAS/SET_CAMERAS'
export const ADD_CAMERA = 'CAMERAS/ADD_CAMERA'
export const SET_CAMERAS_LOADING_STATUS = 'CAMERAS/SET_CAMERAS_LOADING_STATUS'
export const SET_ACTIVE_CAMERA = 'CAMERAS/SET_ACTIVE_CAMERA'

export type SetCamerasAction = {
  type: 'CAMERAS/SET_CAMERAS';
  payload: Camera[];
}

export type AddCameraAction = {
  type: 'CAMERAS/ADD_CAMERA';
  payload: Camera;
}

export type SetCamerasLoadingStatusAction = {
  type: 'CAMERAS/SET_CAMERAS_LOADING_STATUS';
  payload: boolean;
}

export type SetActiveCameraAction = {
  type: 'CAMERAS/SET_ACTIVE_CAMERA';
  payload: Camera;
}


export type CamerasActionTypes =
  SetCamerasAction |
  AddCameraAction |
  SetCamerasLoadingStatusAction |
  SetActiveCameraAction
