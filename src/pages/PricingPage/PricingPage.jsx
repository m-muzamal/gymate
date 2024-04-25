import React from "react";
import "./pricingPage.scss";
import img from "../../images/bgImage/img.svg";
import img1 from "../../images/pricing/img1.jpg";
import img2 from "../../images/pricing/img2.jpg";
import img3 from "../../images/pricing/img3.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PricingPage() {
  const navigate = useNavigate();
  const isLoggedin = useSelector((state) => state.gym.value);

  const handleClick = (plan) => {
    if (isLoggedin) {
      if (confirm(`Are you sure you want to purchase this ${plan} plan?`)) {
        localStorage.setItem("booking", true);
        localStorage.setItem("progress", 0);
        alert("You have successfully purchase this plan.");
      }
    } else {
      alert("You have to login first.");
      navigate("/login");
    }
  };
  return (
    <section className="pricing-page">
      <div className="container">
        <div className="imgText">
          <p>PRICING CHART</p>
          <img className="bgImg" src={img} alt="" />
        </div>
        <h2 className="title-black">Exclusive Pricing Plan</h2>
        <p className="txt disc">
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
        <div className="content">
          <div className="card">
            <div className="img">
              <img src={img1} alt="" />
              <p className="img-text">Beginners</p>
            </div>
            <div className="items">
              <div className="price">
                <p className="txt">$</p>
                <p className="bold">39</p>
                <p className="txt tim">p/m</p>
              </div>
              <p className="txt">Free Hand</p>
              <p className="txt">Gym Fitness</p>
              <p className="txt">Weight Loss</p>
              <p className="txt">Personal Trainer</p>
              <p className="txt">Cycling</p>
              <button onClick={() => handleClick("Biggner")} className="btn">
                Purchase Now
              </button>
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src={img2} alt="" />
              <p className="img-text">Intermediat</p>
            </div>
            <div className="items">
              <div className="price">
                <p className="txt">$</p>
                <p className="bold">65</p>
                <p className="txt tim">p/m</p>
              </div>
              <p className="txt">Free Hand</p>
              <p className="txt">Gym Fitness</p>
              <p className="txt">Weight Loss</p>
              <p className="txt">Personal Trainer</p>
              <p className="txt">Cycling</p>
              <button
                onClick={() => handleClick("Intermediat")}
                className="btn"
              >
                Purchase Now
              </button>
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src={img3} alt="" />
              <p className="img-text">Pro</p>
            </div>
            <div className="items">
              <div className="price">
                <p className="txt">$</p>
                <p className="bold">100</p>
                <p className="txt tim">p/m</p>
              </div>
              <p className="txt">Free Hand</p>
              <p className="txt">Gym Fitness</p>
              <p className="txt">Weight Loss</p>
              <p className="txt">Personal Trainer</p>
              <p className="txt">Cycling</p>
              <button onClick={() => handleClick("Pro")} className="btn">
                Purchase Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PricingPage;
