import { FETCH_TAGS_COUNT } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_TAGS_COUNT:
      return action.payload;
    default:
      return state;
  }
};
