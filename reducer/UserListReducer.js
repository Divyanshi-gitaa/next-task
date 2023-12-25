import { UserList } from "@/action-constant/UserListActionConstant";

const initialState = {
  // All Users
  // -----------------------------------------------------------------
  allUsersLoading: false,
  allUsersError: "",
  allUsers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    // All Users
    // -----------------------------------------------------------------
    case UserList.GET_ALL_USERS:
      return {
        ...state,
        allUsersLoading: true,
      };

    case UserList.GET_ALL_USERS_SUCCESS:
      const { allUsers } = action.payload || {};

      return {
        ...state,
        allUsersLoading: false,
        allUsers: allUsers,
      };

    case UserList.GET_ALL_USERS_FAILURE:
      return {
        ...state,
        allUsersLoading: false,
        allUsersError: action.payload.error,
      };
    default:
      return state;
  }
};
