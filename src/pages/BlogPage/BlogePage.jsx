import React from "react";
import "./blogePage.scss";
import img from "../../images/bgImage/img.svg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function BlogePage() {
  const navigate =useNavigate();
  return (
    <section className="blog-page">
      <div className="container">
        <div className="imgtext">
          <p>LATEST BLOG</p>
          <img src={img} alt="" />
        </div>
        <h2 className="title-black">Our Recent News</h2>
        <p className="txt disc">
          Gymat an unknown printer took a galley of type and scrambled make a
          type specimen book.
        </p>
        <div className="content">
          <div className="card">
            <div className="date">
              <p className="date-text">22.03.2023</p>
            </div>
            <h3 className="bold">Yoga For Everyone in 2023</h3>
            <p className="txt">
              This is program designed to make the practice of yoga beneficial
              for people of all ages, abilities, and backgrounds.
            </p>
            <button className="btn-primary" onClick={() => navigate('./blog')}>
              Read More <AiOutlineArrowRight />
            </button>
          </div>

          <div className="card">
            <div className="date">
              <p className="date-text">22.03.2023</p>
            </div>
            <h3 className="bold">Getting Back Into CrossFit After Vacation</h3>
            <p className="txt">
              Learn how to ease back into your CrossFit routine after a vacation
              with tips and strategies for success.
            </p>
            <button className="btn-primary" onClick={() => navigate('./blog')}>
              Read More <AiOutlineArrowRight />
            </button>
          </div>

          <div className="card">
            <div className="date">
              <p className="date-text">22.03.2023</p>
            </div>
            <h3 className="bold">Meet Fitness Ambassador Grace</h3>
            <p className="txt">
              Get to know Grace, a fitness enthusiast and dedicated ambassador
              who is passionate about helping others reach their fitness goals.
            </p>
            <button className="btn-primary" onClick={() => navigate('./blog')}>
              Read More <AiOutlineArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogePage;
