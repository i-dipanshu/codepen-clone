import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex-center notFound">
      <p>OOPS !!!</p>
      <p>404 Not Found</p>
      <Link to="/">
        <button className="btn">Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
