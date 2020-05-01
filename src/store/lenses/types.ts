export type Lens = {
  id?: string;
  name: string,
  image?: string,
  cameraId: string,
  createdAt?: string
}

export type LensesState = {
  lenses: Lens[];
  activeLens: Lens | null;
  isLoading: boolean;
}

export const SET_LENSES = 'LENSES/SET_LENSES'
export const ADD_LENS = 'LENSES/ADD_LENS'
export const SET_LENSES_LOADING_STATUS = 'LENSES/SET_LENSES_LOADING_STATUS'
export const SET_ACTIVE_LENS = 'LENSES/SET_ACTIVE_LENS'

export type SetLensesAction = {
  type: 'LENSES/SET_LENSES';
  payload: Lens[];
}

export type AddLensAction = {
  type: 'LENSES/ADD_LENS';
  payload: Lens;
}

export type SetLensesLoadingStatusAction = {
  type: 'LENSES/SET_LENSES_LOADING_STATUS';
  payload: boolean;
}

export type SetActiveLensAction = {
  type: 'LENSES/SET_ACTIVE_LENS';
  payload: Lens;
}


export type LensesActionTypes = 
  SetLensesAction | 
  AddLensAction | 
  SetLensesLoadingStatusAction | 
  SetActiveLensAction
