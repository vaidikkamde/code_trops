import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <h1>Hello CodeTrops</h1>
      <h2>
        I don't Seem to have much stuff to write on home page but below are the
        navigations to Student Page and Teachers Page.
      </h2>
      <Link to="/student">
        <Button variant="primary">Primary</Button>{" "}
      </Link>
    </>
  );
}
export default Home;
