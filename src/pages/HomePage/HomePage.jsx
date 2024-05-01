import React from "react";
import "./homePage.scss";
import { BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import img from "../../images/bgImage/img.svg";
import { BsArrowRightShort } from "react-icons/bs";
import AboutPage from "../AboutPage/AboutPage";
import ClassPage from "../ClassPage/ClassPage";
import ChoseUs from "../ChoseUs/ChoseUs";
import TraningPage from "../TraningPage/TraningPage";
import Testimonials from "../Testimonials/Testimonials";
import GalleryPage from "../GalleryPage/GalleryPage";
import BmiPage from "../BmiPage/BmiPage";
import PricingPage from "../PricingPage/PricingPage";
import BlogePage from "../BlogPage/BlogePage";
import Contact from "../ContactPage/Contact";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  window.scrollTo(0, 0);
  return (
    <>
      <section id="home" className="home">
        <div className="container">
          <div className="content">
            <div className="img">
              <div className="content">
                <p>FIND YOUR ENERGY</p>
                <img src={img} alt="" />
              </div>
            </div>
            <div className="titlee">
              <h1 className="title">
                MAKE YOUR BODY <span>FIT & PERFECT</span>
              </h1>
            </div>
            <button className="btn" onClick={() => navigate("/classes")}>
              our classes <BsArrowRightShort />
            </button>
          </div>
        </div>
        <div className="sideitem">
          <p className="side-text">SHARE</p>
          <div className="line"></div>
          <div className="icons">
            <a href="">
              <BiLogoLinkedin />
            </a>
            <a href="">
              <FiGithub />
            </a>
          </div>
        </div>
      </section>
      <AboutPage />
      <ClassPage />
      <ChoseUs />
      <TraningPage />
      <Testimonials />
      <GalleryPage />
      <BmiPage />
      <BlogePage />
      <Contact />
    </>
  );
}

export default HomePage;
