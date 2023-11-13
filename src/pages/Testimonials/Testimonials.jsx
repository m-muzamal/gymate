import React from "react";
import "./testimonials.scss";
import img from "../../images/bgImage/img.svg";
import quotes from "../../images/testimonials/quotes.png";
import mainImg from "../../images/testimonials/testimonial-new.jpg";
import logo1 from "../../images/testimonials/logo1.png";
import logo2 from "../../images/testimonials/logo2.png";
import logo3 from "../../images/testimonials/logo3.png";
import logo4 from "../../images/testimonials/logo4.png";
import logo5 from "../../images/testimonials/logo5.png";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="imgtext">
          <p>TESTIMONIALS</p>
          <img src={img} alt="" />
        </div>
        <div className="content">
          <div className="outer-box">
            <div className="inner-box">
              <div className="left">
                <div className="img">
                  <img src={mainImg} alt="" />
                </div>
              </div>
              <div className="right">
                <img className="quote" src={quotes} alt="" />
                <p className="txt">
                  “I've been a member of Gymate for the past 6 months and it has
                  been an amazing experience. The trainers are knowledgeable and
                  supportive, the equipment is top-notch, and the community of
                  members is friendly and encouraging.”
                </p>
                <h3 className="title-text">Kethrine Linghford</h3>
                <div className="btns">
                  <p className="txt ceo">CEO of Hogwarts</p>
                  <div className="button">
                    <button>
                      <AiOutlineArrowLeft />
                    </button>
                    <button>
                      <AiOutlineArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="logos">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
            <img src={logo5} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
