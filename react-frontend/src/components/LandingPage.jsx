import { Row, Col, Nav, Navbar } from "react-bootstrap";
import "../stylesheets/LandingPage.css";
import { useNavigate } from "react-router-dom";

/**
 * This function contains details and functionality for the landing page.
 * @returns A fully functioning landing page.
 */
function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar fixed="top" bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href=""> </Navbar.Brand>
        <Navbar.Brand href="">
          <h4>OFFICE HOURS</h4>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => navigate("/mentorSignup")}>
            <h5>Mentor Signup</h5>
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/mentorLogin")}>
            <h5>Mentor Login</h5>
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/StudentTicketStatus")}>
            <h5>Check Ticket Status</h5>
          </Nav.Link>
          <Nav.Link onClick={() => navigate("/studentLogin")}>
            <h5>Create Ticket</h5>
          </Nav.Link>
        </Nav>
      </Navbar>
      <Row className="lp">
        <Col xs="7">
          <header className="lp-header">
            <h1>
              Optimize your time in Office Hours with our User-Friendly tool.
            </h1>
          </header>
        </Col>
        <Row className="App-row-left">
          <Col className="image-col-left">
            <img
              src={require("../images/1.png")}
              width="250"
              height="250"
              alt="Student wearing a mint blouse and grey hijab submitting a ticket to attend office hours."
            />
          </Col>
          <Col className="App-col-left">
            <h2> Ask Your Questions </h2>
            Students can submit a ticket to an Office detailing their questions
            and group them under subcategories. Students will recieve their
            place in line and information about their Mentor.
          </Col>
        </Row>

        <Row className="App-row-right">
          <Col className="App-col-right">
            <h2> Manage A Waitlist </h2>
            Mentors can create Offices linked to a Class Code, to view multiple
            Office Hours at once. Mentors can view tickets as they appear and
            choose to either handle or skip them.
          </Col>
          <Col className="Image-col-right">
            <img
              src={require("../images/2.png")}
              width="250"
              height="250"
              alt="TA viewing the list of tickets in their hours on their waitlist."
            />
          </Col>
        </Row>

        <Row className="App-row-left">
          <Col className="App-col-left">
            <img
              src={require("../images/3.png")}
              width="250"
              height="250"
              alt="Students and mentors interacting in communal space to solve problems together."
            />
          </Col>
          <Col className="App-col-left">
            <h2> Foster A Community </h2>
            All members of an Office can connect and collaborate, by grouping
            students with similar queries together and sharing information about
            recent queries.
          </Col>
        </Row>

        {/* <div className="Bottom-tab-background">
          <Row className="Bottom-tab-row">
            <h3>resources</h3>
            <Col className="Bottom-tab-col">
              <p>for Mentors</p>
              <ul>
                <li>login / signup</li>
                <li>create a class</li>
              </ul>
            </Col>
            <Col className="Bottom-tab-col">
              <p>for Students</p>
              <ul>
                <li>login / signup</li>
                <li>Find your Office</li>
              </ul>
            </Col>
          </Row>
        </div> */}
      </Row>
    </>
  );
}

export default LandingPage;
