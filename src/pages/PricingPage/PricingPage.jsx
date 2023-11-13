import React from "react";
import "./pricingPage.scss";
import img from "../../images/bgImage/img.svg";
import img1 from "../../images/pricing/img1.jpg";
import img2 from "../../images/pricing/img2.jpg";
import img3 from "../../images/pricing/img3.jpg";
import { useNavigate } from "react-router-dom";

function PricingPage() {
  const navigate = useNavigate()
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
              <button onClick={() => navigate("/contact")} className="btn">Purchase Now</button>
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src={img2} alt="" />
              <p className="img-text">Beginners</p>
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
              <button onClick={() => navigate("/contact")}className="btn">Purchase Now</button>
            </div>
          </div>

          <div className="card">
            <div className="img">
              <img src={img3} alt="" />
              <p className="img-text">Beginners</p>
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
              <button onClick={() => navigate("/contact")}className="btn">Purchase Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default PricingPage;
