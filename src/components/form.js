import React from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

function TheDateForm({ handleChange, contact }) {
  const formStyles = {
    //width: 'auto'
  };

  const dateTimeStyles = {};

  const storyStyles = {
    width: "125%",
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="date">
            <Form.Label>
              Date
              <Form.Control
                required
                type="date"
                name="date"
                onChange={handleChange}
                value={contact.date}
              />
            </Form.Label>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              c'mon fill it in!{" "}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="time">
            <Form.Label>
              Time
              <Form.Control
                required
                type="time"
                name="time"
                value={contact.time}
                onChange={handleChange}
              />
            </Form.Label>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              c'mon fill it in!{" "}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="story">
            <Form.Label>
              Short Story
              <Form.Control
                required
                as="textarea"
                maxLength="200"
                spellCheck="true"
                style={storyStyles}
                rows={3}
                name="story"
                value={contact.story}
                onChange={handleChange}
              />
            </Form.Label>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              c'mon fill it in!{" "}
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Container>
  );
}
export default TheDateForm;
