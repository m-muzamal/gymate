import React, { useState } from "react";
import "./schedule.scss";
import Header from "../../pages/Header/Header";
import { daysOfWeek, scheduleData } from "./dummyData";
import { useNavigate } from "react-router-dom";

function Schedule() {
  const [activeDay, setActiveDay] = useState("Monday");
  const navigate = useNavigate();

  const handleDayClick = (day) => {
    setActiveDay(day);
  };

  const getScheduleForDay = (day) => {
    return scheduleData.find((item) => item.day === day);
  };

  const activeSchedule = activeDay ? getScheduleForDay(activeDay) : null;

  return (
    <>
      <Header title="Schedule by day" />
      <section className="schedule">
        <div className="container">
          <div className="week">
            {daysOfWeek.map((day) => (
              <p
                key={day}
                className={`day ${activeDay === day ? "active" : ""}`}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </p>
            ))}
          </div>
          {activeSchedule.classes.map((classItem, index) => (
            <div key={index} className="detail">
              <div className="item">
                <p className="txt">Class Name</p>
                <p className="bold">{classItem.className}</p>
              </div>
              <div className="item">
                <p className="txt">Time</p>
                <p className="bold">{classItem.time}</p>
              </div>
              <div className="item">
                <p className="txt">Trainer</p>
                <p className="bold">{classItem.trainer}</p>
              </div>
              <div className="item">
                <p className="button" onClick={() => navigate("/contact")}>
                  Join Now
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Schedule;
