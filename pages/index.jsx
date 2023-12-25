import React, { useEffect } from "react";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// Actions
import getAllUsers from "@/actions/UserListActions";

// Components
import Loader from "@/component/Loader";

const index = () => {
  // selector
  const allUsers = useSelector((state) => state.userList.allUsers);
  const isLoading = useSelector((state) => state.userList.allUsersLoading);

  // dispatch
  const dispatch = useDispatch();

  // useEffect
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  // loader
  if (isLoading) return <Loader />;
  if (Object.keys(allUsers).length > 0)
    return (
      <div className="bg-dark text-white">
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
                  <Link href={`/users/${user.id}`}>{user?.name}</Link>
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

export default index;
