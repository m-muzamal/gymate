import React from "react";
import "./aboutPage.scss";
import img from "../../images/bgImage/img.svg";
import equpment from "../../images/who-we-are/equpments.png";
import machine from "../../images/who-we-are/gym.png";
import trainy from "../../images/who-we-are/weightlifter.png";
import clock from "../../images/who-we-are/progresion.png";
import wrokout from "../../images/who-we-are/workout.png";
import list from "../../images/who-we-are/nutritions.png";
import girl from "../../images/who-we-are/girl-run.png";
import girlText from "../../images/who-we-are/girl-side-text.png";
import wind from "../../images/who-we-are/wind.png";
import bg from "../../images/who-we-are/girl-redbg.svg";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();
  return (
    <section className="about-page">
      <div className="container">
        <div className="boxes">
          <div className="box">
            <img src={clock} alt="" />
            <p className="box-title">PROGRESSION</p>
            <p className="txt">
              Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time.{" "}
            </p>
          </div>
          <div className="box">
            <img src={wrokout} alt="" />
            <p className="box-title">WORKOUT</p>
            <p className="txt">
              With a variety of workouts to choose from, you'll have everything
              you need to get into the best shape of your life.
            </p>
          </div>
          <div className="box">
            <img src={list} alt="" />
            <p className="box-title">NUTRITIONS</p>
            <p className="txt">
              Our team will work with you to create a personalized meal plan
              that helps you reach your specific health goals.
            </p>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <div className="title-bg">
              <div className="img">
                <p>Who we are</p>
                <img src={img} alt="" />
              </div>
            </div>
            <h2 className="title-black">
              Take Your Health And Body To Next Level
            </h2>
            <p className="txt">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="items">
              <div className="item b">
                <img src={trainy} alt="" />
                <h3>PROFESSIONAL TRAINERS</h3>
              </div>
              <div className="item b">
                <img src={equpment} alt="" />
                <h3>MODERN EQUIPMENTS</h3>
              </div>
              <div className="item">
                <img src={machine} alt="" />
                <h3>FANCY GYM MACHINES</h3>
              </div>
            </div>
            <button className="btn" onClick={() => navigate("./about")}>
              {" "}
              take a tour <BsArrowRightShort />
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
      </div>
    </section>
  );
}

export default AboutPage;
