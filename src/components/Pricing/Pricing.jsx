import React from "react";
import "./pricing.scss";
import PricingPage from "../../pages/PricingPage/PricingPage";
import Header from "../../pages/Header/Header";

function Pricing() {
  return (
    <>
      <Header title = "Pricing" />
      <section className="pricing">
        <div className="container">
          <PricingPage />
        </div>
      </section>
    </>
  );
}

export default Pricing;
