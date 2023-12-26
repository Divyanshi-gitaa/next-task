import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetailsById } from "@/actions/UserAction";
import Loader from "@/component/Loader";
import { useRouter } from "next/router";

const UserDetails = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userDetails);
  const isLoading = useSelector((state) => state.user.userDetailsLoading);
  const router = useRouter();

  // Get the id parameter from the URL
  const { id } = router.query;

  useEffect(() => {
    // Fetch user details using the id
    dispatch(getUserDetailsById({ id: +id }));
  }, [dispatch, id]);

  if (isLoading) return <Loader />;

  if (Object.keys(user).length > 0)
    return (
      <div className="details-container">
        <Button variant="outline-success" href="/users" className="button">
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
      </div>
    );
};

export default UserDetails;
