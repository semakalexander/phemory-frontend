import {
  Lens,
  SET_LENSES,
  ADD_LENS,
  SET_LENSES_LOADING_STATUS,
  SET_ACTIVE_LENS,
  SetLensesAction,
  AddLensAction,
  SetLensesLoadingStatusAction,
  SetActiveLensAction,
} from "./types";

const setLenses: (lenses: Lens[]) => SetLensesAction = lenses => ({
  type: SET_LENSES,
  payload: lenses,
});

const addLens: (lens: Lens) => AddLensAction = lens => ({
  type: ADD_LENS,
  payload: lens,
});

const setLensesLoadingStatus: (
  status: boolean
) => SetLensesLoadingStatusAction = status => ({
  type: SET_LENSES_LOADING_STATUS,
  payload: status,
});

const setActiveLens: (lens: Lens) => SetActiveLensAction = (
  lens
) => ({
  type: SET_ACTIVE_LENS,
  payload: lens,
});

export { setLenses, addLens, setLensesLoadingStatus, setActiveLens };
