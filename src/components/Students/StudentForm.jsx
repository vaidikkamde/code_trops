import React from "react";
import Select from "react-select";
import { Col, Button, Form } from "react-bootstrap";
import { classes, sections } from "./Options";
function StudentForm() {
  return (
    <>
      <Col>
        <h1>Add Student</h1>
        <Form id="studentForm">
          <Form.Row>
            <Form.Group as={Col} controlId="name">
              <Form.Label>
                Name{" "}
                <span class="text-muted " style={{ fontSize: "0.75rem" }}>
                  (For ex. Jhon Doe)
                </span>{" "}
              </Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Student Name"
                pattern="[A-Za-z]*"
              />
            </Form.Group>
            <Form.Group as={Col} controlId="rollnumber">
              <Form.Label>
                Roll Number{" "}
                <span class="text-muted " style={{ fontSize: "0.75rem" }}>
                  (For ex. 42)
                </span>{" "}
              </Form.Label>
              <Form.Control
                type="text"
                pattern="[0-9]*"
                required
                placeholder="Roll Number"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="class">
              <Form.Label>Class</Form.Label>
              <Select options={classes} required />
            </Form.Group>
            <Form.Group as={Col} controlId="section">
              <Form.Label>Section</Form.Label>
              <Select options={sections} required />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Col xs={"auto"}>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col xs={"auto"}>
              <Button variant="danger">Reset</Button>
            </Col>
          </Form.Row>
        </Form>
      </Col>
    </>
  );
}
export default StudentForm;
