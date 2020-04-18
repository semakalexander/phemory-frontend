// Describing the shape of the system's slice of state

type Version = number

export interface SystemState {
  version: Version;
}

// Describing the different ACTION NAMES available
export const UPDATE_VERSION = "SYSTEM/UPDATE_VERSION";

interface UpdateVersionAction {
  type: "SYSTEM/UPDATE_VERSION";
  payload: Version;
}

export type SystemActionTypes = UpdateVersionAction;
