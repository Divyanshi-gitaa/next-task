import React from "react";
import { Button, Container } from "react-bootstrap";

const index = () => {
  return (
    <Container className="d-flex flex-column align-items-center p-5 justify-center ">
      <h1>User list page</h1>
      <Button href="/users">Users list page</Button>
    </Container>
  );
};

export default index;
