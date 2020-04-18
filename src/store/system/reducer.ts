import { UPDATE_VERSION, SystemState, SystemActionTypes } from "./types";

const initialState: SystemState = {
  version: 0
};

const systemReducer = (
  state = initialState,
  action: SystemActionTypes
): SystemState => {
  switch (action.type) {
    case UPDATE_VERSION: {
      return {
        ...state,
        version: action.payload
      };
    }
    default:
      return state;
  }
}

export default systemReducer
