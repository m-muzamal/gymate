import React from "react";
import "./classPage.scss";
import img from "../../images/bgImage/img.svg";
import cycling from "../../images/classes/cycling.jpg";
import karate from "../../images/classes/karate.jpg";
import power from "../../images/classes/powerlifting.jpg";
import med from "../../images/classes/meditation.jpg";
import mma from "../../images/classes/mma.jpg";
import workout from "../../images/classes/workout.jpg";
import bike from "../../images/features/gym-bike.png";
import kar from "../../images/features/karate.png";
import boxer from "../../images/features/boxer.png";
import dumble from "../../images/features/dumbbell.png";
import yoga from "../../images/features/yoga.png";
import work from "../../images/features/workout.png";
import bg from "../../images/features/cta-bg.png";
import { BsArrowRightShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function ClassPage() {
  const navigate = useNavigate();
  return (
    <section className="classPage">
      <div className="container">
        <div className="bgtxt">
          <p>OUR FEATURED CLASS</p>
          <img src={img} alt="" />
        </div>
        <h2 className="title-black">We Are Offering Best Flexible Classes</h2>
        <div className="content">
          <div className="col">
            <div className="img">
              <div className="icon">
                <img src={bike} alt="" />
              </div>
              <div className="text">
                <p className="big">Cycling</p>
                <p className="small">Wednessday: 9:00am-10:00</p>
              </div>
              <img src={cycling} alt="" />
            </div>
            <div className="img">
              <div className="icon">
                <img src={kar} alt="" />
              </div>
              <div className="text">
                <p className="big">Karate</p>
                <p className="small">Wednessday: 9:00am-10:00</p>
              </div>
              <img src={karate} alt="" />
            </div>
            <div className="img">
              <div className="icon">
                <img src={dumble} alt="" />
              </div>
              <div className="text">
                <p className="big">Power</p>
                <p className="small">Wednessday: 9:00am-10:00</p>
              </div>
              <img src={power} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="img">
              <div className="icon">
                <img src={yoga} alt="" />
              </div>
              <div className="text">
                <p className="big">Meditation</p>
                <p className="small">Wednessday: 9:00am-10:00</p>
              </div>
              <img src={med} alt="" />
            </div>
            <div className="img">
              <div className="icon">
                <img src={boxer} alt="" />
              </div>
              <div className="text">
                <p className="big">Material Art</p>
                <p className="small">Wednessday: 9:00am-10:00</p>
              </div>
              <img src={mma} alt="" />
            </div>
            <div className="img">
              <div className="icon">
                <img src={bike} alt="" />
              </div>
              <div className="text">
                <p className="big">Workout</p>
                <p className="small">Wednessday: 9:00am-10:00</p>
              </div>
              <div className="icon">
                <img src={work} alt="" />
              </div>
              <img src={workout} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="class-footer">
        <div className="class-footer-items">
          <h2 className="title-white">
            We Are Always Providing Best Fitness Service For You{" "}
          </h2>
          <div className="footer-right">
            <button className="btn" onClick={() => navigate("./classes")}>
              join with us <BsArrowRightShort />
            </button>
          </div>
        </div>
        <img src={bg} alt="" />
      </div>
    </section>
  );
}

export default ClassPage;
