import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as reduxForm } from "redux-form";
import tagsReducer from "./tagsReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  tagsCount: tagsReducer
});
