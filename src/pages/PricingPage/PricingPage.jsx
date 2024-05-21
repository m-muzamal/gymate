import React, { useState } from "react";
import "./pricingPage.scss";
import img from "../../images/bgImage/img.svg";
import img1 from "../../images/pricing/img1.jpg";
import img2 from "../../images/pricing/img2.jpg";
import img3 from "../../images/pricing/img3.jpg";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import Loading from "../../components/Loading/Loading";

function PricingPage() {
  const login = JSON.parse(sessionStorage.getItem("login"));
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async (plan) => {
    if (true) {
      if (confirm(`Are you sure you want to purchase this plan?`)) {
        sessionStorage.setItem("booking", true);
        localStorage.setItem("progress", 0);
      }

      const stripe = await loadStripe(
        "pk_test_51PBRzCRp2oHR08OdLaGSRxkveyGPjY6orWl3cnCeUJGTUTMGPzwJyoGFAmxx4DaTxTRVdLQZbtteUveaKxBNdU4i00tiO1JVvJ"
      );

      const body = {
        product: plan,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      const res = await fetch(
        "http://localhost:3001/api/create-checkout-session",
        {
          method: "POST",
          headers: headers,
          body: JSON.stringify(body),
        }
      );

      const session = await res.json();
      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        console.error(result.error);
      }
    } else {
      alert("You have to login first.");
      navigate("/");
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
              <button
                onClick={() => handleClick("price_1PBVL3Rp2oHR08OdREZPnLbs")}
                className="btn"
              >
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
                onClick={() => handleClick("price_1PBVLeRp2oHR08OdsziFnltt")}
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
              <button
                onClick={() => handleClick("price_1PBVdPRp2oHR08OdTnJeqJoR")}
                className="btn"
              >
                Purchase Now
              </button>
            </div>
          </div>
          {loading && <Loading />}
        </div>
      </div>
    </section>
  );
}
export default PricingPage;
