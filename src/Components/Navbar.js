import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
        <nav id="navbar" className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">RentSelf Car</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Home"
                >Home</Link
              >
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"> About </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact"> Contact </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/policies"> Policies </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/insurance"> Insurance </Link>
            </li>
          </ul>
          <div className="d-flex">
            <ul className="nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/Home" className="btn btn-primary">User</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
}



export default Navbar;
