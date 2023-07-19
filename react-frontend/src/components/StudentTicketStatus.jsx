import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../stylesheets/MentorLogin.css";

function StudentTicketStatus() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [ohcode, setohcode] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const params = new URLSearchParams({
      OHCode: ohcode,
      Name: name,
    });
    console.log(params.toString());
    fetch(`http://localhost:8080/student/queueSpot?${params.toString()}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          console.log("Credentials Correct");
          navigate("/studentLandingPage", {
            state: { param: name, code: ohcode },
          });
        } else {
          console.log("Wrong Credentials");
          alert(
            "Incorrect information, please enter it exactly as entered on original ticket or submit a new ticket."
          );
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="back-button">
            <Button variant="danger" onClick={() => navigate("/")}>
              Back
            </Button>{" "}
          </Col>
          <header className="App-header">
            <Col>
              <h1>
                <b>Student Ticket Status Page</b>
              </h1>
            </Col>
          </header>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Office Hour Code</Form.Label>
                <Form.Control
                  placeholder="Enter Office Hour Code"
                  onChange={(e) => setohcode(e.target.value)}
                />
              </Form.Group>
            </Form>
            <Col className="submit-button">
              <Button variant="primary" onClick={handleClick}>
                Check Status
              </Button>{" "}
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default StudentTicketStatus;
