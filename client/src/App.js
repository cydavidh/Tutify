import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import TutorLogin from "./components/Tutor/Login/TutorLogin";
import TutorSignup from "./components/Tutor/Login/TutorSignup";
import TuteeLogin from "./components/Tutee/Login/TuteeLogin";
import TuteeSignup from "./components/Tutee/Login/TuteeSignup";
import TutorPage from "./components/Tutor/TutorPage";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<TutorLogin />} />
        <Route exact path="/tutorlogin" element={<TutorLogin />} />
        <Route exact path="/tutorsignup" element={<TutorSignup />} />
        <Route exact path="/tuteelogin" element={<TuteeLogin />} />
        <Route exact path="/tuteesignup" element={<TuteeSignup />} />
        {/* <Route exact path="/tuteepage" element={<TuteePage />} /> */}
        <Route exact path="/tutorpage" element={<TutorPage />} />

        {/* <Route exact path="/tuteepage" element={<Tuteepage />} />
        <Route exact path="/tutorpage" element={<Tutorpage />} />
        <Route exact path="/teachcourse" element={<Teachcoursesform />} />
        <Route exact path="/requestcourse" element={<Requestcoursesform />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
