import {
  GET_CAMPAIGN,
  DELETE_CAMPAIGN,
  ADD_CAMPAIGN
} from "../actions/types.js";

const initialState = {
  campaign: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPAIGN:
      return {
        ...state,
        campaign: action.payload
      };
    case DELETE_CAMPAIGN: {
      return {
        ...state,
        campaign: { user: action.payload }
      };
    }
    case ADD_CAMPAIGN: {
      return {
        ...state,
        campaign: { user: [...state.campaign.user, action.payload] }
      };
    }
    default:
      return state;
  }
}
