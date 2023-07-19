import React, { Button, Row, Col, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function StudentLandingPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [queueInfo, setQueueInfo] = useState({});
  const [officeInfo, setOfficeInfo] = useState({});
  const [mentorInfo, setMentorInfo] = useState({});

  useEffect(() => {
    const params = new URLSearchParams({
      OHCode: location.state.code,
      Name: location.state.param,
    });
    console.log(params.toString());
    fetch(`http://localhost:8080/student/queueSpot?${params.toString()}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((json) => {
        setQueueInfo(json);
        console.log(json);
      })
      .catch((error) => console.error(error));
    const params2 = new URLSearchParams({ OHCode: location.state.code });
    fetch(
      `http://localhost:8080/office/getOfficeByCode?${params2.toString()}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setOfficeInfo(json);
        console.log(json);
        const params3 = new URLSearchParams({
          username: json.mentorUsername,
        });
        console.log(params3.toString());
        fetch(`http://localhost:8080/mentor/getMentor?${params3.toString()}`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((json) => {
            setMentorInfo(json);
            console.log(json);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Container>
          <Row>
            <Col>
              <Button
                style={{
                  flex: 1,
                  flexDirection: "row-reverse",
                }}
                variant="danger"
                onClick={() => navigate("/LandingPage")}
              >
                Back
              </Button>{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              <h1>
                <b>Ticket Submitted!</b>
              </h1>
              <h4>
                Thank you for submitting a ticket to Office{" "}
                {officeInfo.officeName} with code {location.state.code}. There
                are
              </h4>
              <h1>{JSON.stringify(queueInfo)}</h1>
              <h4>people ahead of you.</h4>
              <br />
              <div style={{ backgroundColor: "#fff", margin: 40 }}>
                <h4>
                  Hello! My name is {officeInfo.mentorUsername}. My pronouns are{" "}
                  {mentorInfo.pronouns}.
                </h4>
                <h4>I will be joining you shortly.</h4>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}
export default StudentLandingPage;
