import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../stylesheets/MentorSignup.css";

//TODO: Confirm Line 124 w/ Jack + Harsh - Anjali

function MentorSignup() {
  const navigate = useNavigate();
  //const {navigate2} = this.props.navigation;
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const mentor = {
      name,
      role,
      pronouns,
      email,
      username,
      password,
      confirmPassword,
    };
    console.log(mentor);
    fetch("http://localhost:8080/mentor/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mentor), // passing in parameters into the body
    }).then(() => {
      console.log("New mentor added");
      navigate("/mentorViewpage", { state: { param: username } });
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
            <Row>
              <h1>
                <b>Mentor Signup Page</b>
              </h1>
            </Row>
          </header>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Control
                  placeholder="Class Role e.g. Peer Mentor, TA, Instructor"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Pronouns</Form.Label>
                <Form.Control
                  placeholder="Please enter your pronouns"
                  value={pronouns}
                  onChange={(e) => setPronouns(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  placeholder="UserID seen by others "
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="Email only for Contact purposes "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Col className="submit-button">
          <Button onClick={handleClick} variant="primary">
            Create Account
          </Button>
          {}
        </Col>
      </Container>
    </div>
  );
}

export default MentorSignup;
