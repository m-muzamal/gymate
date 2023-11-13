import React from "react";
import "./traningPage.scss";
import img from "../../images/bgImage/img.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import bg from "../../images/trainers/trainer-bg.png";
import logo from "../../images/trainers/bg-attachment.png";
import trainer1 from "../../images/trainers/trainer1.png";
import trainer2 from "../../images/trainers/trainer2.png";
import trainer3 from "../../images/trainers/trainer3.png";

function TraningPage() {
  return (
    <section className="traning">
        <img className="logo" src={logo} alt="" />
      <div className="container">
        <div className="imgtext">
          <p>GYM TRAiNERS</p>
          <img src={img} alt="" />
        </div>
        <h2 className="title-black">Team Of Expert Coaches</h2>
        <p className="txt">
          Expert team of coaches helps you succeed in any goal, personalized
          guidance and motivation provided!
        </p>
        <div className="content">
          <div className="card">
            <div className="trainer">
              <img className="trainer-img" src={trainer2} alt="" />
              <img src={bg} alt="" />
            </div>
            <div className="detail">
              <h3 className="big-text">Johnathon Deo</h3>
              <p className="txt">Crossfit Traner</p>
              <div className="icons">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <MdOutlineEmail />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="trainer">
              <img className="trainer-img" src={trainer3} alt="" />
              <img src={bg} alt="" />
            </div>
            <div className="detail">
              <h3 className="big-text">Ana June</h3>
              <p className="txt">Yoga Traner</p>
              <div className="icons">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <MdOutlineEmail />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="trainer">
              <img className="trainer-img" src={trainer1} alt="" />
              <img src={bg} alt="" />
            </div>
            <div className="detail">
              <h3 className="big-text">John Lewis</h3>
              <p className="txt">Personal Traner</p>
              <div className="icons">
                <FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <MdOutlineEmail />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TraningPage;
