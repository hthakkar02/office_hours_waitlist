import React, { useState } from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../App.css";

function StudentLogin() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [ohcode, setOHCode] = useState("");
  const [comments, setComments] = useState("");
  const [question, setQuestion] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [email, setEmail] = useState("");
  const [tags, setTags] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, ohcode, comments, question, tags, email, pronouns };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New student added");
      navigate("/studentLandingPage", { state: { param: name, code: ohcode } });
    });
  };

  return (
    <div className="App">
      <Row>
        <Col className="back-button">
          <Button variant="danger" onClick={() => navigate("/")}>
            Back
          </Button>{" "}
        </Col>
      </Row>
      <Container>
        <header className="App-header">
          <Row>
            <Col>
              <h1>
                <b>Student Ticket Page</b>
              </h1>
            </Col>
          </Row>
        </header>
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
                <Form.Label>Email</Form.Label>
                <Form.Control
                  placeholder="A way to contact you for further clarification."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Pronouns</Form.Label>
                <Form.Control
                  placeholder="Enter your preferred pronouns"
                  value={pronouns}
                  onChange={(e) => setPronouns(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Office Hours Code</Form.Label>
                <Form.Control
                  placeholder="Enter Class Code Provided"
                  value={ohcode}
                  onChange={(e) => setOHCode(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>Comments </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter any additional information you wish to provide about yourself"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Question(s) </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter your Office Hours Question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>
                  Tags for your question! (1 word tags seperated by commas){" "}
                </Form.Label>
                <Form.Control
                  placeholder="E.g. hw1, question1"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Col>
          <Row>
            <Col className="submit-button">
              <Button onClick={handleClick} variant="primary">
                Submit Ticket
              </Button>{" "}
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}

export default StudentLogin;
