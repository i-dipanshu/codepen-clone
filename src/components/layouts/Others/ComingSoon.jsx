import React from "react";
import { Link } from "react-router-dom";
import "../styles.scss";

const ComingSoon = () => {
  return (
    <div className="flex-center comingSoon">
      <p>Coming Soon !!! </p>
      <p>Thanks You For your patience ❤️</p>
      <Link to="/">
        <button className="btn">Go Home</button>
      </Link>
    </div>
  );
};

export default ComingSoon;
