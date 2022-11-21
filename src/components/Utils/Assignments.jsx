import React from "react";
import Assignment from "./Assignment";
import "./styles.scss";

const Assignments = () => {
  return (
    <div className="assignments">
      <Assignment props="assignment1" />
      <Assignment props="assignment2" />
      <Assignment props="assignment3" />
      <Assignment props="assignment4" />
      <Assignment props="assignment5" />
      <Assignment props="assignment6" />
    </div>
  );
};

export default Assignments;
