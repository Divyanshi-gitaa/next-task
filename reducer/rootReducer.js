import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import UserListReducer from "./UserListReducer";

const reducers = {
  // User Reducers
  user: UserReducer,
  userList: UserListReducer,
};

// Combining All Reducers
export default combineReducers({
  ...reducers,
});
