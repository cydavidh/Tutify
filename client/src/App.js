import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import TutorLogin from "./components/Tutor/Login/TutorLogin";
// import TutorSignup from "./components/Tutor/Login/TutorSignup";
import TuteeLogin from "./components/Tutee/Login/TuteeLogin";
// import TuteeSignup from "./components/Tutee/Login/TuteeSignup";
import TutorPage from "./components/Tutor/TutorPage";
import TuteePage from "./components/Tutee/TuteePage";
import PrivateTutorRoute from "./components/Tutor/PrivateTutorRoute";
import PrivateTuteeRoute from "./components/Tutee/PrivateTuteeRoute";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Routes>
        <Route exact path="/" element={<TutorLogin />} />
        <Route exact path="/tutor/login" element={<TutorLogin />} />
        <Route exact path="/tutee/login" element={<TuteeLogin />} />
        <Route exact path="/tutor/dashboard" element={<PrivateTutorRoute />}>
          <Route exact path="/tutor/dashboard" element={<TutorPage />} />
        </Route>
        <Route exact path="/tutee/dashboard" element={<PrivateTuteeRoute />}>
          <Route exact path="/tutee/dashboard" element={<TuteePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
