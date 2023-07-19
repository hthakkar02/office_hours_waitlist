import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../stylesheets/MentorLogin.css";

function MentorLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const mentor = { username, password };
    fetch("http://localhost:8080/mentor/authenticate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mentor),
    }).then((response) => {
      if (response.ok) {
        console.log("Mentor logged in Successfully");
        navigate("/mentorViewpage", { state: { param: username } });
      } else {
        console.log("Mentor login failed.");
        alert("Login Failed");
      }
    });
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
                <b>Mentor Login Page</b>
              </h1>
            </Col>
          </header>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  placeholder="Enter Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Enter Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
            </Form>
            <Col className="submit-button">
              <Button variant="primary" onClick={handleClick}>
                Login
              </Button>{" "}
            </Col>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MentorLogin;
