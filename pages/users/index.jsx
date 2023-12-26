import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import getAllUsers from "@/actions/UserListActions";
import Loader from "@/component/Loader";
import { useRouter } from "next/router";

const Index = () => {
  const allUsers = useSelector((state) => state.userList.allUsers);
  const isLoading = useSelector((state) => state.userList.allUsersLoading);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleUserNameClick = (userId) => {
    router.push(`/users/details?id=${userId}`);
  };

  if (isLoading) return <Loader />;
  if (Object.keys(allUsers).length > 0)
    return (
      <div className="bg-dark text-white table-container">
        <h1 className="text-center">Users List</h1>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => (
              <tr key={user?.id}>
                <td>{user?.id}</td>
                <td>
                  <span
                    style={{ cursor: "pointer", textDecoration: "underline" }}
                    onClick={() => handleUserNameClick(user?.id)}
                  >
                    {user?.name}
                  </span>
                </td>
                <td>{user?.email}</td>
                <td>{user?.website}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
};

export default Index;
