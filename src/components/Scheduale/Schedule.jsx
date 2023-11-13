import React from "react";
import "./schedule.scss";
import Header from "../../pages/Header/Header";
import { useNavigate } from "react-router-dom";

function Schedule() {
  return (
    <>
      <Header title="Schedule by day" />
      <section className="schedule">
        <div className="container">
          <div className="week">
            <p className="day">Monday</p>
            <p className="day">Tuesday</p>
            <p className="day">Wednesday</p>
            <p className="day">Thursday</p>
            <p className="day">Friday</p>
            <p className="day">Saturday</p>
          </div>
          <div className="detail">
            <div className="item">
              <p className="txt">Class Name</p>
              <p className="bold">Class Name</p>
            </div>
            <div className="item">
              <p className="txt">Time</p>
              <p className="bold">9:00am - 10:00am</p>
            </div>
            <div className="item">
              <p className="txt">Trainer</p>
              <p className="bold">Mike Tyson</p>
            </div>
            <div className="item">
              <p className="button">Join Now</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Schedule;
