import React from "react";
import "./styles.scss";

import { Link } from "react-router-dom";

const Question = ({ question_no }) => {
  return (
    <Link to={`/${question_no}`} className="section">
      <h2 className="text-uppercase">{question_no}</h2>
    </Link>
  );
};

export default Question;
