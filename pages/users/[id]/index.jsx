import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// Action
import { getUserDetailsById } from "@/actions/UserAction";

// Component
import Loader from "@/component/Loader";

const Users = () => {
  // dispatch
  const dispatch = useDispatch();

  // selector
  const user = useSelector((state) => state.user.userDetails);
  const isLoading = useSelector((state) => state.user.userDetailsLoading);

  // router
  const { query } = useRouter();
  const id = query.id;

  // useEffect
  useEffect(() => {
    dispatch(getUserDetailsById({ id: +id }));
  }, [dispatch, id]);

  // Loader
  if (isLoading) return <Loader />;

  if (Object.keys(user).length > 0)
    return (
      <>
        <Button variant="outline-success" href="/">
          Back to home
        </Button>
        <Card
          border="primary"
          style={{ width: "50%", textAlign: "center", margin: "0 auto" }}
        >
          <Card.Header as="h1">{user?.name}'s details</Card.Header>
          <Card.Body>
            <Card.Title>Email: {user?.email}</Card.Title>
            <Card.Text>
              Address: {user?.address?.city}, {user?.address?.street}
            </Card.Text>
            <Card.Text>Zipcode: {user?.address?.zipcode}</Card.Text>
            <Card.Text>Phone Number: {user?.phone}</Card.Text>
            <Card.Text>Company Website: {user?.website}</Card.Text>
            <Card.Text>Company Name: {user?.company?.name}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
};

export default Users;
