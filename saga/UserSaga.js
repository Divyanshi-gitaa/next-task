import { User } from "@/action-constant/UserActionConstants";
import { all, put, call, takeLatest } from "redux-saga/effects";

/**
 * User Saga
 */
function* getUser(action) {
  try {
    const { id } = action.payload;
    const response = yield call(
      fetch,
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    const user = yield response.json();

    yield put({
      type: User.GET_USER_DETAILS_BY_ID_SUCCESS,
      payload: { userDetails: user },
    });
  } catch (error) {
    yield put({
      type: User.GET_USER_DETAILS_BY_ID_FAILURE,
      payload: { error },
    });

    // Handle Error
    yield errorHandler({ error });
  }
}

export default function* root() {
  yield all([takeLatest(User.GET_USER_DETAILS_BY_ID, getUser)]);
}
