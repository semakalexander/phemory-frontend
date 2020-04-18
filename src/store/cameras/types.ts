export type Camera = {
  id: string;
  name: string,
  lens: [string]
  image?: string,
  createdAt: string
} | null

export type CamerasState = {
  cameras: Camera[];
  isLoading: boolean;
}

export const SET_CAMERAS = 'CAMERAS/SET_CAMERAS'
export const ADD_CAMERA = 'CAMERAS/ADD_CAMERA'
export const SET_CAMERAS_LOADING_STATUS = 'CAMERAS/SET_CAMERAS_LOADING_STATUS'

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


export type CamerasActionTypes = 
  SetCamerasAction | 
  AddCameraAction | 
  SetCamerasLoadingStatusAction;
