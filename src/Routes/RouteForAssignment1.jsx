import React from "react";
import { Routes, Route } from "react-router-dom";
import ComingSoon from "../components/layouts/Others/ComingSoon";

const RouteForAssignment1 = () => {
  return (
    <Routes>
      <Route path="/assignments/assignment1" element=<ComingSoon /> />
      {/* <Route path="/assignments/assignment1/question1" element="" /> */}
    </Routes>
  );
};

export default RouteForAssignment1;
