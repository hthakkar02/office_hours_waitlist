import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/LandingPage";
import StudentLogin from "./components/StudentLogin";
import StudentLandingPage from "./components/StudentLandingPage";
import MentorLogin from "./components/MentorLogin";
import MentorSignup from "./components/MentorSignup";
import MentorViewpage from "./components/MentorViewpage";
import OfficeCreation from "./components/OfficeCreation";
import OfficeTickets from "./components/OfficeTickets";
import StudentTicketStatus from "./components/StudentTicketStatus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/studentLogin" element={<StudentLogin />} />
        <Route path="/studentLandingPage" element={<StudentLandingPage />} />
        <Route path="/StudentTicketStatus" element={<StudentTicketStatus />} />
        <Route path="/mentorLogin" element={<MentorLogin />} />
        <Route path="/mentorSignup" element={<MentorSignup />} />
        <Route path="/mentorViewpage" element={<MentorViewpage />} />
        <Route path="/OfficeCreation" element={<OfficeCreation />} />
        <Route path="/OfficeTickets" element={<OfficeTickets />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
