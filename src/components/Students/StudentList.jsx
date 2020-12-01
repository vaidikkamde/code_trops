import React from "react";
import { Col, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
function StudentList() {
  return (
    <>
      <Col
        style={{
          marginTop: "1rem"
        }}
      >
        <h1>Student List</h1>
        <ListGroup
          style={{
            marginBottom: "2rem"
          }}
        >
          <ListGroup.Item>
            Cras justo odio{" "}
            <span className="float-right ml-3 text-danger">
              Delete <i class="fas fa-trash"></i>
            </span>
            <span className="float-right text-info">
              Edit <i class="far fa-edit"></i>
            </span>
          </ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        <Link to="/">
          <Button variant="primary">Home</Button>{" "}
        </Link>
      </Col>
    </>
  );
}
export default StudentList;
