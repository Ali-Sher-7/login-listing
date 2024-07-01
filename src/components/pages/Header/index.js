import React from "react";
import { Link } from "react-router-dom";
import { Images } from "../../../Assets/images";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light justify-content-between">
        <div>
          <Link to={"/"} className="navbar-brand">
            <h3>ERP</h3>
          </Link>
        </div>
        <div className="">
          <Link to={"../listing"} className="navbar-brand">
            <h5>Users</h5>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
