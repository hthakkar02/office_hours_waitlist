import React, {
  Button,
  Row,
  Col,
  Container,
  Card,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// Resource used: https://www.makeuseof.com/redirect-user-after-login-react/
// First we need to confirm if the account exists or not.
// If they are accessing their account for the first time, then load the following:
// Name
// Username
// Different classes, as well as codes for each
// Option to add new offices
// If they already have an account in their database, then load the following:
// Name
// Username
// Option to add new offices

function MentorViewPage() {
  const navigate = useNavigate();
  const [offices, setOffices] = useState();
  const [mentorInfo, setMentorInfo] = useState();
  const location = useLocation();

  const handleNewOfficeClick = () => {
    navigate("/OfficeCreation", { state: { param: location.state.param } });
  };

  //TODO: Add this function to the appropriate card section below. I meant to put it near the item that said
  const handleEnterOfficeClick = (ohcode) => {
    navigate("/OfficeTickets", {
      state: { param: location.state.param, code: ohcode },
    });
  };

  useEffect(() => {
    fetch(
      `http://localhost:8080/mentor/getMentor?username=${location.state.param}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        // body:JSON.stringify(location.state.param) // passing in parameters into the body
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setMentorInfo(json);
      })
      .catch((error) => console.error(error));
    const params = new URLSearchParams({ username: location.state.param });
    fetch("http://localhost:8080/office/getAllByUsername?" + params.toString())
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOffices(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/mentorViewpage", {
                state: { param: location.state.param },
              });
            }}
          >
            <h4>OFFICE HOURS</h4>
          </Navbar.Brand>
          <Navbar.Brand>
            {location.state.param}
            <Button
              style={{ marginLeft: 1000, marginTop: 5 }}
              variant="outline-warning"
              onClick={() => {
                navigate("/landingPage"); // TODO: Make sure the user is logged out as soon as Button is pressed.
              }}
            >
              Log Out
            </Button>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <br />

      <Row>
        {offices &&
          offices.map((office) => (
            <Col key={office.id}>
              <Card
                className="text-center"
                style={{
                  width: "18rem",
                  backgroundColor: "#64B350",
                  marginTop: 100,
                }}
              >
                <Card.Body>
                  <Card.Title>{office.officeName}</Card.Title>
                  <Card.Subtitle className="mb-2 text-lg">
                    {office.ohcode}
                  </Card.Subtitle>
                  <Card.Text style={{ padding: 45 }}></Card.Text>
                  <Button
                    style={{
                      color: "grey",
                      background: "white",
                      border: "white",
                    }}
                    onClick={() => handleEnterOfficeClick(office.ohcode)}
                  >
                    Enter Office
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        <Col>
          <Card
            className="text-center"
            border="success"
            style={{ width: "18rem", marginTop: 100 }}
          >
            <Card.Body>
              <Card.Title style={{ color: "grey", alignContent: "center" }}>
                New Office
              </Card.Title>
              <Card.Text style={{ padding: 27 }}>
                <img
                  alt=""
                  src={require("../images/plus.png")}
                  width="50"
                  height="50"
                  className="d-inline-block align-top"
                />{" "}
              </Card.Text>
              <Button
                style={{
                  color: "grey",
                  background: "white",
                  border: "white",
                }}
                onClick={handleNewOfficeClick}
              >
                Create Office
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MentorViewPage;
