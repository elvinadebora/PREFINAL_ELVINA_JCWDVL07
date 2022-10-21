// file ini berfungsi untuk reducer yang banyak untuk digabung disini
import UserReducer from "./user";
import { combineReducers } from "redux";

// const ReducerNature = combineReducers({
//   user: UserReducer,
// });
export default combineReducers({
  user: UserReducer,
});

// export default ReducerNature;
