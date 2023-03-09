import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Landing from "./components/landing/landing";
import Signin from "./components/signin-signup/signin";
import Signup from "./components/signin-signup/signup";
import Header from "./library/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/Login-Signup-Firebase/Dashboard" element={<Dashboard />} />
          <Route path="/Login-Signup-Firebase" element={<Landing />} />
          <Route path="/Login-Signup-Firebase/Signin" element={<Signin />} />
          <Route path="/Login-Signup-Firebase/Signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
