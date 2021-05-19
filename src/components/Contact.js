import React from "react";
import { Form, Button } from "react-bootstrap";

const DateForm = () => {

    const formStyles = {
        border: "1px solid black",
        padding: "5px"
    }
  return (
    <Form style={formStyles}>
      <Form.Group controlId="date">
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group controlId="time">
        <Form.Label>Time</Form.Label>
        <Form.Control type="time" />
      </Form.Group>
      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default DateForm;
