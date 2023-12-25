import { UserList } from "@/action-constant/UserListActionConstant";

const getAllUsers = () => ({
  type: UserList.GET_ALL_USERS,
  // payload: {},
});

export default getAllUsers;
