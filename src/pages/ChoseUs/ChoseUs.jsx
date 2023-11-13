import React from "react";
import "./choseUs.scss";
import img from "../../images/bgImage/img.svg";
import pic from "../../images/choose-us/main-img.png";
import bottle from "../../images/choose-us/bottle-of-water.png";
import bench from "../../images/choose-us/bench-press.png";
import bag from "../../images/choose-us/gym-bag.png";
import traning from "../../images/choose-us/training.png";
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";

function ChoseUs() {
  const navigate = useNavigate();
  return (
    <section className="choseUs">
      <div className="container">
        <div className="left">
          <div className="img">
            <img src={pic} alt="" />
          </div>
        </div>
        <div className="right">
          <div className="img-text">
            <p>why chose us</p>
            <img src={img} alt="" />
          </div>
          <h2 className="title-white">
            We Can Give A Shape Of Your Body Here!
          </h2>
          <p className="txt">
            At <strong>Gymate</strong>, we are dedicated to helping you achieve
            the body of your dreams. Our expert trainers and nutritionists will
            work with you to create a personalized fitness and nutrition plan
            that helps you reach your specific goals.
          </p>
          <div className="items">
            <div className="item">
              <div className="icon">
                <img src={traning} alt="" />
              </div>
              <p className="bold-text">Free Fitness Traning</p>
            </div>
            <div className="item">
              <div className="icon">
                <img src={bench} alt="" />
              </div>
              <p className="bold-text">New Gym Equipment</p>
            </div>
            <div className="item">
              <div className="icon">
                <img src={bag} alt="" />
              </div>
              <p className="bold-text">Gym Bag Equipments</p>
            </div>
            <div className="item">
              <div className="icon">
                <img src={bottle} alt="" />
              </div>
              <p className="bold-text">Fresh Bottles Watter</p>
            </div>
            <button className="btn" onClick={() => navigate('./classes')}>Our Classes <AiOutlineArrowRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChoseUs;
