import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
import DateForm from "./Contact";
import background from "../media/galaxy.jpg"

function App() {
  const pageStyles = {
    backgroundColor: "black",
    color: "red",
    height: "100vh",
    backgroundImage: `url(${background})`,
    backgroundSize: "100vw 100vh",
    position: 'relative',
    
  };

  const containerStyles = {
    backgroundColor: "rgba(255,255,255,0.8)",
   padding: "20px",
    margin: "auto",
    width: "auto",
    justifyContent: "center",
    position: "relative",
    top: "30%",
  

    
  }

  const titleStyles = {
    textAlign: 'center'
  }
  return (
    <div style={pageStyles}>
      <Container style={containerStyles}>
        <Row>
          <Col md style={titleStyles} >
            <h1>This is Your Invite</h1>
            <h3>You better feel special!</h3>
          </Col>
        </Row>
        <Row>
          <Col md>
            <h3>CONGRATULATIONS!!!</h3>
            <p>
              You have been invited to watch not one but two scary movies with
              the magical and quite frankly amazing Reuben. To accept this prize
              we would need for you to register your intreest by filling out the
              form.
            </p>
          </Col>
          <Col md>
            <DateForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
