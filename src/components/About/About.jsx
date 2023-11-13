import React from "react";
import "./about.scss";
import Header from "../../pages/Header/Header";
import img from "../../images/bgImage/img.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import girl from "../../images/who-we-are/girl-run.png";
import girlText from "../../images/who-we-are/girl-side-text.png";
import wind from "../../images/who-we-are/wind.png";
import bg from "../../images/who-we-are/girl-redbg.svg";
import target from "../../images/AboutPage/target.png";
import mountain from "../../images/AboutPage/mountain.png";
import pic1 from "../../images/AboutPage/4.jpg";
import pic2 from "../../images/AboutPage/3.jpg";

function About() {
  const navigate = useNavigate();
  return (
    <>
      <Header title="About Us" />
      <section className="about">
        <div className="container">
          <div className="about-item">
            <div className="left">
              <div className="imgtxt">
                <p>WHO WE ARE</p>
                <img className="bg" src={img} alt="" />
              </div>
              <h2 className="title-black">
                We Will Give You Strength and Health
              </h2>
              <p className="txt">
                At Gymate, we are dedicated to helping you achieve the body of
                your dreams. Our expert trainers and nutritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </p>
              <button className="btn" onClick={() => navigate("/contact")}>
                Contact Us <AiOutlineArrowRight />
              </button>
            </div>
            <div className="right">
              <div className="right-items">
                <img className="img text" src={girlText} alt="" />
                <img className="img girl" src={girl} alt="" />
                <img className="img wind" src={wind} alt="" />
                <img className="bg" src={bg} alt="" />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="left-content">
              <div className="detail">
                <img src={target} alt="" />
                <h2 className="title-black">Our History</h2>
                <p className="txt">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  Exercitation veniam consequat.
                </p>
              </div>
              <div className="pic">
                <img className="picture" src={pic1} alt="" />
              </div>
            </div>
            <div className="left-content reverse">
              <div className="pic">
                <img className="picture" src={pic2} alt="" />
              </div>
              <div className="detail">
                <img src={mountain} alt="" />
                <h2 className="title-black">Our History</h2>
                <p className="txt">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit
                  Exercitation veniam consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
