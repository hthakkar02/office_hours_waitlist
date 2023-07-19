import React, { useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import "../stylesheets/OfficeCreation.css";

const OfficeCreation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [officeName, setofficeName] = useState("");
  const [allDays, setAllDays] = useState({
    Sunday: false,
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
  });
  const [ohcode, setohcode] = useState(generateOHCode());

  function generateOHCode() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  }

  const handleTitleChange = (event) => {
    setofficeName(event.target.value);
  };

  const handleDaysChange = (event) => {
    const { name, checked } = event.target;
    setAllDays((prevDays) => ({ ...prevDays, [name]: checked }));
  };

  const handleOHCodeRegenerate = () => {
    setohcode(generateOHCode());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const days = Object.keys(allDays).filter((day) => allDays[day]);
    console.log("officeName:", officeName);
    console.log("Days:", days);
    console.log("ohcode:", ohcode);

    const mentorUsername = location.state.param;
    const office = { officeName, days, ohcode, mentorUsername };
    console.log(office);
    console.log(JSON.stringify(office));
    fetch("http://localhost:8080/office/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(office), // passing in parameters into the body
    }).then(() => {
      console.log("New office added");
      handleOHCodeRegenerate();
      navigate("/mentorViewpage", { state: { param: mentorUsername } });
    });
  };

  return (
    <div className="App">
      <Col className="back-button">
        <Button
          variant="danger"
          onClick={() => {
            navigate("/mentorViewpage", {
              state: { param: location.state.param },
            });
          }}
        >
          Back
        </Button>{" "}
      </Col>

      <Container className="App-content">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="title">
            <header className="App-header">
              <Form.Label>
                <h1>
                  <b>Office Title </b>
                </h1>
              </Form.Label>
            </header>
            <Form.Control
              type="text"
              placeholder="Enter office title"
              value={officeName}
              onChange={handleTitleChange}
            />
          </Form.Group>

          <Form.Group controlId="allDays">
            <br />
            <Form.Label>
              <h3>Office Hours</h3>
            </Form.Label>
            <Row>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Sunday"
                  name="Sunday"
                  checked={allDays.Sunday}
                  onChange={handleDaysChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Monday"
                  name="Monday"
                  checked={allDays.Monday}
                  onChange={handleDaysChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Tuesday"
                  name="Tuesday"
                  checked={allDays.Tuesday}
                  onChange={handleDaysChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Wednesday"
                  name="Wednesday"
                  checked={allDays.Wednesday}
                  onChange={handleDaysChange}
                />
              </Col>
              <Col>
                <Form.Check
                  type="checkbox"
                  label="Thursday"
                  name="Thursday"
                  checked={allDays.Thursday}
                  onChange={handleDaysChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Friday"
                  name="Friday"
                  checked={allDays.Friday}
                  onChange={handleDaysChange}
                />
                <Form.Check
                  type="checkbox"
                  label="Saturday"
                  name="Saturday"
                  checked={allDays.Saturday}
                  onChange={handleDaysChange}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group controlId="code">
            <Form.Label>
              <br />
              <h3>Code</h3>
            </Form.Label>
            <Row>
              <Col>
                <Button variant="secondary" onClick={handleOHCodeRegenerate}>
                  Regenerate
                </Button>
              </Col>
              <Col>
                <Form.Control
                  type="text"
                  style={{ textAlign: "center" }}
                  value={ohcode}
                  readOnly
                />
              </Col>
              <Col>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </Container>
    </div>
  );
};

export default OfficeCreation;
