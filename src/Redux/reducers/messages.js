import { GET_MESSAGES, CREATE_MESSAGES } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.msg,
        status: action.payload.status
      };

    default:
      return state;
  }
}
