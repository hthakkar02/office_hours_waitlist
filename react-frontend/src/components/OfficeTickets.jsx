import React, {
  Button,
  Row,
  Col,
  Container,
  Accordion,
  Navbar,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function OfficeTickets() {
  const navigate = useNavigate(); // Used to navigate between pages
  const [tickets, getTickets] = useState(); // Used to obtain json file with student information.
  const location = useLocation();
  const [skippedTickets, setSkippedTickets] = useState(new Set());

  const handleSkip = (id) => {
    setSkippedTickets((prev) => {
      const newSkippedTickets = new Set(prev);
      if (newSkippedTickets.has(id)) {
        newSkippedTickets.delete(id);
      } else {
        newSkippedTickets.add(id);
      }
      return newSkippedTickets;
    });
    console.log(skippedTickets);
  };
  const handleRemove = (ticketID) => {
    const params = new URLSearchParams({
      id: ticketID,
    });
    console.log(params.toString());
    fetch(`http://localhost:8080/student/remove?${params.toString()}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        loadTickets();
      })
      .catch((error) => console.error(error));
  };

  const loadTickets = () => {
    const params = new URLSearchParams({ OHCode: location.state.code });
    console.log(params.toString());
    fetch("http://localhost:8080/student/getAllByOHCode?" + params.toString())
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        getTickets(data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    loadTickets();
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

      <Accordion style={{ padding: 70 }}>
        {/** This function is used to set a ticket as handeled. Upon being handled, we close the ticket by deleting
         * it entirely, and it deletes the record of the ticket from the database/queue.
         *
         * INPUTS: ticket ID: ticket we are currently handling
         * return: None
         */}
        {tickets &&
          tickets.map((ticket) => (
            <Accordion.Item
              eventKey={ticket.id}
              key={ticket.id}
              style={
                skippedTickets.has(ticket.id) ? { backgroundColor: "red" } : {}
              }
            >
              <Accordion.Header
                style={{
                  backgroundColor: skippedTickets.has(ticket.id)
                    ? "red"
                    : "#f5f5f5",
                  padding: "10px 20px",
                  fontWeight: "bold",
                }}
              >
                <span style={{ marginRight: 10 }}>Student Name:</span>
                {ticket.name}
                <span style={{ marginLeft: 20, marginRight: 10 }}>Email:</span>
                {ticket.email}
                <span style={{ marginLeft: 20, marginRight: 10 }}>
                  Pronouns:
                </span>
                {ticket.pronouns}
                <span style={{ marginLeft: 20, marginRight: 10 }}>Tags:</span>
                {ticket.tags}
              </Accordion.Header>
              <Accordion.Body>
                <Row>
                  <Col>
                    <p style={{ fontSize: 16, fontWeight: "bold" }}>
                      Question:
                    </p>
                    <p style={{ fontSize: 16 }}>{ticket.question}</p>
                  </Col>
                  <Col>
                    <p style={{ fontSize: 16, fontWeight: "bold" }}>
                      Comments:
                    </p>
                    <p style={{ fontSize: 16 }}>{ticket.comments}</p>
                  </Col>
                  <Col>
                    <Row>
                      <Button
                        variant="success"
                        style={{ height: 40, width: 120, margin: "0 10px" }}
                        title="Handled"
                        onClick={() => handleRemove(ticket.id)}
                      >
                        Handled
                      </Button>
                      <Button
                        variant="danger"
                        style={{ height: 40, width: 120, margin: "0 10px" }}
                        title="Skipped"
                        onClick={() => handleSkip(ticket.id)}
                      >
                        {skippedTickets.has(ticket.id) ? "Unskip" : "Skip"}
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Accordion.Body>
            </Accordion.Item>
          ))}
      </Accordion>
    </Container>
  );
}

export default OfficeTickets;
