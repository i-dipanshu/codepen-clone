import React from "react";
import "./styles.scss";

import { Link } from "react-router-dom";

const Assignment = ({ props }) => {
  return (
    <Link to={`/assignments/${props}`} className="section ">
      <h2 className="assgn-font text-capitalize">{props}</h2>
    </Link>
  );
};

export default Assignment;
