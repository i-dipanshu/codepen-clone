import React from "react";
import { Link } from "react-router-dom";
import "../styles.scss";

const Home = () => {
  return (
    <section className="flex-center home">
      <p>Assignment For Csw</p>
      <Link to="/assignments">
        <button className="btn">Get Started</button>
      </Link>
    </section>
  );
};

export default Home;
