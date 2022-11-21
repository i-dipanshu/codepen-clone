import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import { MdViewStream, MdClear } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    document.querySelector(".nav").classList.toggle("toggle");
    setToggle(!toggle);
  };
  return (
    <nav className="nav toggle">
      <div className="nav-mobile" onClick={toggleNav}>
        <div>
          <Link to={"/"} className="nav-items">
            Home
          </Link>
          <Link to={"/assignments"} className="nav-items">
            Assignments
          </Link>
        </div>
      </div>
      <div className="brand" onClick={toggle ? toggleNav : undefined}>
        <Link className="brand-name" to={"/"}>
          dp
        </Link>
      </div>
      <div className="nav-items-desk">
        <Link to={"/"} className="nav-items">
          Home
        </Link>
        <Link to={"/assignments"} className="nav-items">
          Assignments
        </Link>
      </div>

      <div className="nav-ham">
        <div className="hamburger" onClick={toggleNav}>
          {!toggle ? <MdViewStream /> : <MdClear />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
