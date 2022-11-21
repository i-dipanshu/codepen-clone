import React from "react";
import { Routes, Route } from "react-router-dom";

import Assignment2 from "../components/pages/Assignment2/Assignment2";

import {
  A2Q1,
  A2Q2,
  A2Q3,
  A2Q4,
  A2Q5,
  A2Q6,
  A2Q7,
  A2Q8,
  A2Q9,
  A2Q10,
} from "../components/pages/Assignment2";

const RouteForAssignment2 = () => {
  return (
    <Routes>
      <Route path="/assignments/assignment2" element=<Assignment2 /> />
      <Route path="/a2q1" element=<A2Q1 /> />
      <Route path="/a2q2" element=<A2Q2 /> />
      <Route path="/a2q3" element=<A2Q3 /> />
      <Route path="/a2q4" element=<A2Q4 /> />
      <Route path="/a2q5" element=<A2Q5 /> />
      <Route path="/a2q6" element=<A2Q6 /> />
      <Route path="/a2q7" element=<A2Q7 /> />
      <Route path="/a2q8" element=<A2Q8 /> />
      <Route path="/a2q9" element=<A2Q9 /> />
      <Route path="/a2q10" element=<A2Q10 /> />
    </Routes>
  );
};

export default RouteForAssignment2;
