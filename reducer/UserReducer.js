import { User } from "@/action-constant/UserActionConstants";

const initialState = {
  // User Details by ID
  // ----------------------------------------------------------
  userDetails: {},
  userDetailsLoading: false,
  userDetailsError: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Get User Details by ID
    // ----------------------------------------------------------
    case User.GET_USER_DETAILS_BY_ID:
      return {
        ...state,
        userDetailsLoading: true,
      };

    case User.GET_USER_DETAILS_BY_ID_SUCCESS:
      const { userDetails } = action.payload || {};
      return {
        ...state,
        userDetailsLoading: false,
        userDetails: userDetails,
      };

    case User.GET_USER_DETAILS_BY_ID_FAILURE:
      return {
        ...state,
        userDetailsLoading: false,
        userDetailsError: action.payload.error,
      };
    default:
      return state;
  }
};
