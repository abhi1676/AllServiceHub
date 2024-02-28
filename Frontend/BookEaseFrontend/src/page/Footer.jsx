import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Hotel Booking System</h5>
            <p>Being a 24/7 Hotel is one of our best amenities because we can offer our customer unrestricted freedom of access from sun up to sun down and everywhere in between. You no longer have to worry about anything in Hotel at any time!</p>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-white">Home</Link></li>
              <li><Link to="/about" className="text-white">About</Link></li>
              <li><Link to="/services" className="text-white">Services</Link></li>
              <li><Link to="/contact" className="text-white">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Contact Us</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact" className="text-white">+1 (123) 456-7890</Link></li>
              <li><Link to="/contact" className="text-white">info@example.com</Link></li>
              <li><p className="mb-0">123 Main Street, City, Country</p></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Follow Us</h5>
            <ul className="list-unstyled d-flex justify-content-start">
              <li className="me-3"><Link to="#" className="text-white"><FaFacebook /></Link></li>
              <li className="me-3"><Link to="#" className="text-white"><FaTwitter /></Link></li>
              <li><Link to="#" className="text-white"><FaInstagram /></Link></li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-center">
          <p className="mb-1">Register for free</p>
          <Link to="/user/customer/register" className="btn btn-outline-light btn-rounded">Sign up!</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
