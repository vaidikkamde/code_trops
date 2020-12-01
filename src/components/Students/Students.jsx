import React from "react";
import { Container, Row } from "react-bootstrap";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";
function Students() {
  return (
    <>
      <Container fluid>
        <Row md={2} xs={1}>
          <StudentForm />
          <StudentList />
        </Row>
      </Container>
    </>
  );
}
export default Students;
