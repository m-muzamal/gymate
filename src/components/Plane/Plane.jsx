import React, { useEffect, useState } from "react";
import Header from "../../pages/Header/Header";
import "./plan.scss";
import img from "../../images/bgImage/img.svg";
import planeImg from "../../images/plane/plane.png";
import { TiStopwatch } from "react-icons/ti";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaCheckCircle } from "react-icons/fa";
import { data } from "./data";
import { Link, useNavigate } from "react-router-dom";

const Plane = () => {
  const navigate = useNavigate();

  const [progress, setProgress] = useState();
  const [isComplete, setIsComplete] = useState("");

  const handleClick = (title) => {
    localStorage.setItem("progress", 0);
    navigate(`/week/${title}`);
  };

  return (
    <>
      <Header title="My Plan" />
      <section className="plan">
        <div className="container">
          <div className="img-text">
            <p>Tips for you</p>
            <img src={img} alt="" />
          </div>
          <div className="content">
            <div className="left">
              <h1 className="title-white plan_title">
                To improve your health & fitness
              </h1>
              <p className="txt">Get planty of sleep.</p>
              <p className="txt">
                Hydrate Hydrate Hydrate (Drink Planty of water).
              </p>
              <p className="txt">
                Eat good quality of protein and carbs min 20mint before workout.
              </p>
              <p className="txt">Wear sensible loose clothing.</p>
              <p className="txt">Warm up slowly.</p>
              <p className="txt">Breath deeply through your routine.</p>
              <p className="txt">
                Drink water and eat healthy snack (as necessary).
              </p>
              <p className="txt">Stretch after workout.</p>
              <p className="txt">
                You need to feul your body with healthy food imediately afetr.
              </p>
              <p className="txt">Hydrate Hydrate Hydrate.</p>
            </div>
            <div className="right">
              <img src={planeImg} alt="" />
            </div>
          </div>
          <div className="plan_detial">
            <h1 className="title-white">THE 4-WEEK OF WORKOUT</h1>
            <h2>
              Week 1 and 2<span>Strength</span>
            </h2>
            {data.map((data, index) => (
              <div key={index} className="detail">
                <div className="left_detail">
                  <h3 className="bold-text">Day {index + 1}</h3>
                  <p className="txt plan_txt">{data.title}</p>
                </div>
                <div className="center_detail">
                  {!isComplete ? (
                    <>
                      <p className="txt plan_txt">
                        <span>
                          <TiStopwatch />
                        </span>
                        {data.time}min
                      </p>
                      <p className="txt plan_txt">
                        <span>
                          <LiaClipboardListSolid />
                        </span>
                        {data.types}
                      </p>
                    </>
                  ) : (
                    <p className="complete">
                      Completed
                      <span>
                        <FaCheckCircle />
                      </span>
                    </p>
                  )}
                </div>
                <div className="right_detail">
                  <div className="data">
                    <h3
                      // to={`/week/${data.title}`}
                      className="bold-text start"
                      onClick={() => handleClick(data.title)}
                    >
                      Start
                    </h3>
                  </div>
                </div>
              </div>
            ))}
            <h2 className="span">
              Week 2 and 3<span>Hypertrophy</span>
            </h2>
            {data.map((data, index) => (
              <div key={index} className="detail">
                <div className="left_detail">
                  <h3 className="bold-text">Day {index + 1}</h3>
                  <p className="txt plan_txt">{data.title}</p>
                </div>
                <div className="center_detail">
                  {!isComplete ? (
                    <>
                      <p className="txt plan_txt">
                        <span>
                          <TiStopwatch />
                        </span>
                        {data.time}min
                      </p>
                      <p className="txt plan_txt">
                        <span>
                          <LiaClipboardListSolid />
                        </span>
                        {data.types}
                      </p>
                    </>
                  ) : (
                    <p className="complete">
                      Completed
                      <span>
                        <FaCheckCircle />
                      </span>
                    </p>
                  )}
                </div>
                <div className="right_detail">
                  <div className="data">
                    <Link
                      to={`/week/${data.title}`}
                      className="bold-text start"
                    >
                      Start
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="detail rest">
              <h1 className="rest">Day 7</h1>
              <h1 className="rest">REST</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plane;
