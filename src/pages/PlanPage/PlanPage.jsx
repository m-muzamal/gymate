import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./panePage.scss";
import { useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { dummy_data } from "./dummy_data";

const PlanPage = () => {
  const title = useParams();
  const navigate = useNavigate();
  const [dummyData, setDummyData] = useState(
    dummy_data.filter((data) => data.day === title.id)
  );

  const handleChange = (index) => {
    setDummyData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index] = {
        ...updatedData[index],
        value: !updatedData[index].value,
        bgColor: "#434343b3",
      };
      return updatedData;
    });
  };

  useEffect(() => {
    const allFalse = dummyData.every((data) => !data.value);

    if (allFalse) {
      alert("You have complete your day tasks.");
      navigate("/myPlan/5");
    }
  }, [dummyData, navigate]);

  return (
    <>
      <Header title={"week"} />
      <section className="week">
        <div className="container">
          <div className="content">
            <h1 className="title-black week_titel">{title.id}</h1>
            <div className="items">
              <p className="item"></p>
              <p className="item title_item">Exercise</p>
              <p className="item title_item">Sets</p>
              <p className="item title_item">Reps</p>
              <p className="item title_item">Rest</p>
            </div>
            {dummyData.map((data, index) => (
              <div
                className="task"
                key={index}
                style={{ backgroundColor: `${data.bgColor}` }}
              >
                <div className="items">
                  <p className="item task_text">
                    {data.value ? (
                      <input
                        type="checkbox"
                        onChange={() => handleChange(index)}
                      />
                    ) : (
                      <FaCheckCircle />
                    )}
                  </p>
                  <p className="item task_text">{data.title}</p>
                  <p className="item task_text">{data.set}</p>
                  <p className="item task_text">{data.rep}</p>
                  <p className="item task_text">{data.rest}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PlanPage;
