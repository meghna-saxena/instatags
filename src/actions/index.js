import { SET_ACCESS_TOKEN } from "./types";

export const setAccessToken = accessToken => dispatch => {
  console.log("accessToken => " + accessToken);

  //dispatching an action
  dispatch({ type: SET_ACCESS_TOKEN, payload: accessToken });
};
