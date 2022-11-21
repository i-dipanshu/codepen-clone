import React from "react";
import { Routes, Route } from "react-router-dom";
import ComingSoon from "../components/layouts/Others/ComingSoon";

const RouteForAssignment3 = () => {
  return (
    <Routes>
      <Route path="/assignments/assignment3" element=<ComingSoon /> />
      {/* <Route path="/assignments/assignment3/question1" element="" /> */}
    </Routes>
  );
};

export default RouteForAssignment3;
