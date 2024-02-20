import React from "react";
import "./contact-page.scss";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <section className="contact-page">
      <div className="container">
        <div className="content">
          <h2 className="title-white">Need a Dietition?</h2>
          <h3 className="call">
            <span className="red">Call:</span> +123-456789
          </h3>
          <button className="btn" onClick={() => navigate("./contact")}>
            Contact now
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
