import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Home } from "./components/layouts";
import Assignments from "./components/Utils/Assignments";

import {
  RouteForAssignment1,
  RouteForAssignment2,
  RouteForAssignment3,
  RouteForAssignment4,
  RouteForAssignment5,
  RouteForAssignment6,
} from "./Routes";

import NotFound from "./components/layouts/Others/NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route path="*" element=<NotFound /> /> */}
        <Route path="/" element={<Home />} />
        <Route path="/assignments" element={<Assignments />} />
      </Routes>
      <RouteForAssignment1 />
      <RouteForAssignment2 />
      <RouteForAssignment3 />
      <RouteForAssignment4 />
      <RouteForAssignment5 />
      <RouteForAssignment6 />
    </Router>
  );
};

export default App;
