import { SystemState, UPDATE_VERSION } from "./types";

const updateVersion = (version: SystemState) => ({
  type: UPDATE_VERSION,
  payload: version
})

export { updateVersion }
