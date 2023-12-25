import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <div className="text-5xl text-center">
      <Spinner animation="border" variant="danger" />
    </div>
  );
};

export default Loader;
