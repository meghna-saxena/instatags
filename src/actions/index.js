import axios from "axios";
import { SET_ACCESS_TOKEN, FETCH_TAGS_COUNT } from "./types";

export const setAccessToken = accessToken => dispatch => {
  console.log("accessToken => " + accessToken);

  //dispatching an action
  dispatch({ type: SET_ACCESS_TOKEN, payload: accessToken });
};

export const fetchTagCount = (tagName, accessToken) => async dispatch => {
  // fetching information about a tag object
  const tagResponse = await axios.get(
    `https://api.instagram.com/v1/tags/${tagName}?access_token=${accessToken}`
  );

  // fetching the most recent media published by the owner of the accessToken
  const userRecentMedia = await axios.get(
    `https://api.instagram.com/v1/users/self/media/recent/?access_token=${accessToken}`
  );

  // creating an object immutably by spread operator to merge the above two fetched responses
  const res = { ...userRecentMedia.data, hashtag: tagResponse.data };
  
  dispatch({ type: FETCH_TAGS_COUNT, payload: res });
};
