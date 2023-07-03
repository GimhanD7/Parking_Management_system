import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="heading">Welcome to Online Parking!</h1>
      <p className="description">Find and reserve parking spaces conveniently.</p>
      <div className="button-container">
        <Link to="/addFeedback" className="button">Add Vehicle </Link>
        <Link to="/listFeedback" className="button">Vehicle List</Link>
        <Link to="/adFeedback" className="button">Payments</Link>
      </div>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>About Us</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget neque ligula.</p>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: info@onlineparking.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <p className="footer-bottom">&copy; 2023 Online Parking. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
