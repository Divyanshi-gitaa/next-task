import { all, fork } from "redux-saga/effects";
import UserListSaga from "./UserListSaga";
import UserSaga from "./UserSaga";

/**
 * root Saga
 */
export default function* root() {
  yield all([
    // User saga
    fork(UserListSaga),
    fork(UserSaga),
  ]);
}
