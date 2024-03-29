import React from "react";
import "./footer.scss";
import logo from "../../images/logo/logo-footer.svg";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <p className="txt disc">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <div className="icons">
            <div className="icon">
              <FaFacebookF />
            </div>
            <div className="icon">
              <FaInstagram />
            </div>
            <div className="icon">
              <FaGithub />
            </div>
            <div className="icon">
              <FaLinkedinIn />
            </div>
          </div>
          <p className="txt">Privacy Policy | © 2023 Gymate</p>
          <p className="txt">
            Design by <strong>Muhammad Muzammal</strong>
          </p>
        </div>
        <div className="center">
          <h3 className="bold">Our Classes</h3>
          <Link to={"/classes"} className="txt">
            Fitness Classes
          </Link>
          <Link to={"/classes"} className="txt">
            Aerobics Classes
          </Link>
          <Link to={"/classes"} className="txt">
            Power Yoga
          </Link>
          <Link to={"/classes"} className="txt">
            Learn Machines
          </Link>
          <Link to={"/classes"} className="txt">
            Full-body Strength
          </Link>
        </div>
        <div className="right">
          <h3 className="bold">Working Hours</h3>
          <p className="txt">
            <strong>Monday - Friday:</strong>
          </p>
          <p className="txt">7:00am - 21:00pm</p>
          <p className="txt">
            <strong>Saturday:</strong>
          </p>
          <p className="txt">7:00am - 19:00pm</p>
          <p className="txt">
            <strong>Sunday Closed</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
