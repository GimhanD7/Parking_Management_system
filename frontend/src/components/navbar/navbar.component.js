import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar">
            <div className="navbar-item">
              <a href="/" className="navbar-link">Home</a>
            </div>
            <div className="navbar-item">
              <a href="/listFeedback" className="navbar-link">Vehicle List</a>
            </div>
            <div className="navbar-item">
              <a href="/addFeedback" className="navbar-link">Add Vehicle List</a>
            </div>
            <div className="navbar-item">
              <a href="/adFeedback" className="navbar-link">Vehicle Payments </a>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
