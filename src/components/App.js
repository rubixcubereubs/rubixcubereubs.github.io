import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import "../App.css";
import TheDateForm from "./form";
import background from "../media/galaxy.jpg";

function App() {
  const pageStyles = {
    backgroundColor: "black",
    color: "darkgoldenrod",
    height: "100%",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    position: "relative",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const containerStyles = {
    //backgroundColor: "rgba(255,255,255,0.8)",
    padding: "20px",
    margin: "auto",
    width: "auto",
    justifyContent: "center",
    position: "relative",
    //top: "30%",
    //border: "1px solid red",
  };

  const titleStyles = {
    textAlign: "center",
    border: "1px solid black",
    borderRadius: "10px",
    marginBottom: "5vh",
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  const textStyles = {
    border: "1px solid black",
    borderRadius: "10px",
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  const formStyles = {
    border: "1px solid black",
    borderRadius: "10px",
    padding: "5px",
    backgroundColor: "rgba(0,0,0,0.8)",
    width: "auto",
  };

  const [Contact, setContact] = useState({
    date: "",
    time: "",
    story: "",
  });

  const HandleContactChange = (e) => {
    //const updatedContact = [...Contact];
    const { name, value } = e.target;
    //updatedContact[e.target.className] = e.target.value;
    setContact({ ...Contact, [name]: value });
  };

  // submit
  const [validated, setValidated] = useState(false);

  const HandleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      alert("Damn fool, fill out the form!!!");
    }
    if (form.checkValidity() === true) {
      e.preventDefault();
      setValidated(true);
      alert(
        "Yo bighead! I've been notified but I will ignore it because I just wanted to waste yo time sucka!!!!!!"
      );
      console.log({ ...Contact });
      setContact({
        date: "",
        time: "",
        story: "",
      });
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  };

  return (
    <div style={pageStyles}>
      <Container style={containerStyles}>
        <Row>
          <Col md style={titleStyles}>
            <h1>OMG is this an invite?</h1>
            <h3>But it's so shit! What took so long?</h3>
          </Col>
        </Row>
        <Row>
          <Col md style={textStyles}>
            <h3>CONGRATULATIONS!!!</h3>
            <p>
              You have been invited to watch the first two Scary Movie films (
              probably the best two of the lot ) with the magical and quite
              frankly amazing Reuben. <br />
              <strong>PETTYNESS ALERT!!!</strong> Seeing as you gave me homework
              you must complete your own task for the invitation to be accepted.
              You need to write a short story (Max length 100 words). Topic of
              the story can be anything you want as I can't be bothered to think
              of anything right now but yeah DO IT!!!!
              <br />
              Pick a date of your choosing and I'm sure your choice will be
              ignored but that's life.
            </p>
          </Col>
          <Col md>
            <Form
              noValidate
              validated={validated}
              onSubmit={HandleSubmit}
              style={formStyles}
            >
              <TheDateForm
                contact={Contact}
                handleChange={HandleContactChange}
              />
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
