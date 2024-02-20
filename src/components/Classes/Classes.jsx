import React from "react";
import "./classes.scss";
import Header from "../../pages/Header/Header";
import img1 from "../../images/classes/karate.jpg";
import img2 from "../../images/classes/meditation.jpg";
import img3 from "../../images/classes/mma.jpg";
import img4 from "../../images/classes/cycling.jpg";
import img5 from "../../images/classes/powerlifting.jpg";
import img6 from "../../images/classes/workout.jpg";
import img7 from "../../images/classes/cross.jpg";
import img8 from "../../images/classes/running.jpg";
import img9 from "../../images/classes/bodybuilding.jpg";
import img10 from "../../images/classes/box.jpg";
import img11 from "../../images/classes/yoga.jpg";
import img12 from "../../images/classes/fitness.jpg";
import {
  AiOutlineUser,
  AiOutlineClockCircle,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Classes() {
  const navigate = useNavigate();
  return (
    <>
      <Header title="Classes" />
      <section className="classes">
        <div className="container">
          <div className="img">
            <img src={img1} alt="" />
            <div className="content">
              <p className="bold">Karate</p>
              <div className="detail">
                <p className="name">
                  <AiOutlineUser /> David Rich
                </p>
                <p className="name">
                  <AiOutlineClockCircle />
                  Sat:9:00 am
                </p>
              </div>
              <button onClick={() => navigate("/pricing")} className="btn">
                Join Now{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="img">
            <img src={img2} alt="" />
            <div className="content">
              <p className="bold">Meditation</p>
              <div className="detail">
                <p className="name">
                  <AiOutlineUser /> Marian Mech
                </p>
                <p className="name">
                  <AiOutlineClockCircle />
                  Fri:1:00 pm
                </p>
              </div>
              <button onClick={() => navigate("/pricing")} className="btn">
                Join Now{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="img">
            <img src={img3} alt="" />
            <div className="content">
              <p className="bold">Boxing</p>
              <div className="detail">
                <p className="name">
                  <AiOutlineUser /> John Flex
                </p>
                <p className="name">
                  <AiOutlineClockCircle />
                  Tue:4:00 pm
                </p>
              </div>
              <button onClick={() => navigate("/pricing")} className="btn">
                Join Now{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="img">
            <img src={img4} alt="" />
            <div className="content">
              <p className="bold">Cycling</p>
              <div className="detail">
                <p className="name">
                  <AiOutlineUser /> Dorian Yate
                </p>
                <p className="name">
                  <AiOutlineClockCircle />
                  Sat:9:00 am
                </p>
              </div>
              <button onClick={() => navigate("/pricing")} className="btn">
                Join Now{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="img">
            <img src={img5} alt="" />
            <div className="content">
              <p className="bold">Power Lifting</p>
              <div className="detail">
                <p className="name">
                  <AiOutlineUser /> Power Lee
                </p>
                <p className="name">
                  <AiOutlineClockCircle />
                  Wed:8:00 pm
                </p>
              </div>
              <button onClick={() => navigate("/pricing")} className="btn">
                Join Now{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="img">
            <img src={img6} alt="" />
            <div className="content">
              <p className="bold">Workout</p>
              <div className="detail">
                <p className="name">
                  <AiOutlineUser /> Shawn Ray
                </p>
                <p className="name">
                  <AiOutlineClockCircle />
                  Sun:10:00 am
                </p>
              </div>
              <button onClick={() => navigate("/pricing")} className="btn">
                Join Now{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="img">
            <img src={img7} alt="" />
            <div className="content">
              <p className="bold">Crossfit</p>
              <div className="detail">
                <p className="name">
                  <AiOutlineUser /> Jenifer Alex
                </p>
                <p className="name">
                  <AiOutlineClockCircle />
                  Sun:10:00 am
                </p>
              </div>
              <button onClick={() => navigate("/pricing")} className="btn">
                Join Now{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="img">
            <img src={img8} alt="" />
            <div className="content">
              <p className="bold">Running</p>
              <div className="detail">
                <p className="name">
                  <AiOutlineUser /> Zenian Zessy
                </p>
                <p className="name">
                  <AiOutlineClockCircle />
                  Fri:6:00 am
                </p>
              </div>
              <button onClick={() => navigate("/pricing")} className="btn">
                Join Now{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="img">
            <img src={img9} alt="" />
            <div className="content">
              <p className="bold">Body Building</p>
              <div className="detail">
                <p className="name">
                  <AiOutlineUser /> Jake Poul
                </p>
                <p className="name">
                  <AiOutlineClockCircle />
                  Mon: 8:00 am
                </p>
              </div>
              <button onClick={() => navigate("/pricing")} className="btn">
                Join Now{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="img">
            <img src={img10} alt="" />
            <div className="content">
              <p className="bold">MMA</p>
              <div className="detail">
                <p className="name">
                  <AiOutlineUser /> Buckey Yate
                </p>
                <p className="name">
                  <AiOutlineClockCircle />
                  Fri: 9:00 am
                </p>
              </div>
              <button onClick={() => navigate("/pricing")} className="btn">
                Join Now{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="img">
            <img src={img11} alt="" />
            <div className="content">
              <p className="bold">Yoga</p>
              <div className="detail">
                <p className="name">
                  <AiOutlineUser /> Dorian Yate
                </p>
                <p className="name">
                  <AiOutlineClockCircle />
                  Sun:9:00 am
                </p>
              </div>
              <button onClick={() => navigate("/pricing")} className="btn">
                Join Now{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="img">
            <img src={img12} alt="" />
            <div className="content">
              <p className="bold">Fitness</p>
              <div className="detail">
                <p className="name">
                  <AiOutlineUser /> Dorian Yate
                </p>
                <p className="name">
                  <AiOutlineClockCircle />
                  Tue: 7:00 pm
                </p>
              </div>
              <button onClick={() => navigate("/pricing")} className="btn">
                Join Now{" "}
                <span>
                  <AiOutlineArrowRight />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Classes;
