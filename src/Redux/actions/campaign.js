import axios from "axios";

import {
  GET_CAMPAIGN,
  DELETE_CAMPAIGN,
  ADD_CAMPAIGN,
  GET_ERRORS
} from "./types";

export const getCampaign = () => (dispatch, getState) => {
  axios
    .get("http://localhost:5500/user/")
    .then(res => {
      dispatch({ type: GET_CAMPAIGN, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const deleteCampaign = id => (dispatch, getState) => {
  axios
    .post(`http://localhost:5500/user/delete/${id}`, {
      mode: "no-cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      dispatch({ type: DELETE_CAMPAIGN, payload: res.data });
    })
    .catch(err => {
      console.log(err);
    });
};

export const addCampaign = campaign => (dispatch, getState) => {
  axios
    .post("http://localhost:5500/user/", campaign)
    .then(res => {
      dispatch({ type: ADD_CAMPAIGN, payload: res.data });
    })
    .catch(err => {
      console.log(err)
    });
};
