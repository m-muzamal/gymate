import React, { useEffect, useState } from "react";
import Header from "../../pages/Header/Header";
import "./plan.scss";
import img from "../../images/bgImage/img.svg";
import planeImg from "../../images/plane/plane.png";
import { TiStopwatch } from "react-icons/ti";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaCheckCircle } from "react-icons/fa";
import { data as _data } from "./data";
import { Link } from "react-router-dom";

const Plane = () => {
  const data = JSON.parse(localStorage.getItem("plan")) || _data;
  const [dummyData, setDummyData] = useState(data);

  const handleClick = (index) => {
    setDummyData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = {
        ...updatedData[index],
        value: false,
        bgColor: "#4f4f4f",
      };
      localStorage.setItem("plan", JSON.stringify(updatedData));
      return updatedData;
    });
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
              Week 1 to 4<span>Strength</span>
            </h2>
            {dummyData.map((data, index) => (
              <div
                key={index}
                style={{ backgroundColor: `${data.bgColor}` }}
                className="detail"
              >
                <div className="left_detail">
                  <h3 className="bold-text">Day {index + 1}</h3>
                  <p className="txt plan_txt">{data.title}</p>
                </div>
                <div className="center_detail">
                  <div className="before">
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
                  </div>
                  {!data.value && (
                    <p className="complete">
                      Completed{" "}
                      <span>
                        <FaCheckCircle />
                      </span>
                    </p>
                  )}
                </div>
                <div className="right_detail">
                  <div className="data">
                    <Link
                      onClick={() => handleClick(index)}
                      className="bold-text start"
                      to={`/week/${data.title}`}
                      // to={"/myPlan/5"}
                    >
                      Start
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Plane;
