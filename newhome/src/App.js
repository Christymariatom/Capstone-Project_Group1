import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Myhome from "./components/Myhome";
import BackgroundWithText from "./components/BackgroundWithText";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <Router>
      <div>
        {/* Routes for both login and signup */}
        <Routes>
          <Route path="/" element={<Myhome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
        <BackgroundWithText />
      </div>
    </Router>
  );
}

export default App;
