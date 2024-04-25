import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Chart from "./Chart/Chart";
import "./profile.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  const progress = JSON.parse(localStorage.getItem("progress")) || 0;
  const userData = JSON.parse(sessionStorage.getItem("userData")) || "";
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const booking = JSON.parse(localStorage.getItem("booking")) || false;

  const [updateData, setUpdateData] = useState({
    name: "",
    email: "",
    password: "",
    confrimPassword: "",
  });

  const id = 5;

  const handleClick = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      currentPassword === "" ||
      newPassword === "" ||
      confirmNewPassword === ""
    ) {
      setError("Please fill all the fields.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    } else if (newPassword !== confirmNewPassword) {
      setError("Password is not match.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    } else if (currentPassword === userData.password) {
      setUpdateData({
        name: name,
        email: email,
        password: newPassword,
        confrimPassword: confirmNewPassword,
      });
      console.log(updateData);
      alert("Data update successfully.");
      navigate(`/profile/${id}`);
    }
  };

  const handleLogout = (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to log out?")) {
      localStorage.setItem("isLogin", false);
      navigate("/");
    }
  };

  const handlePlan = () => {
    if (booking) {
      navigate(`/myPlan/${id}`);
    } else {
      alert("You need to enroll your class first.");
      navigate("/classes");
    }
  };

  useEffect(() => {
    fetch("/gymate/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idlogin: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        password: "newpassword",
        date: "2023-03-01",
      }),
    });
  }, []);

  return (
    <>
      <Header title="Your Profile" />
      <section className="profile">
        <div className="container">
          <div className="profile_details">
            <button onClick={handlePlan} className="btn-primary">
              My Plan
            </button>
            <div className="avatar_wrapper">
              <Chart progress={progress} />
            </div>
            <h1 className="title-black">{userData.name}</h1>
            <form className="form profile_form">
              {error ? <p className="error profile-error">{error}</p> : ""}
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <button
                type="submit"
                className="btn-primary"
                onClick={handleClick}
              >
                Update details
              </button>
              <button className="btn-primary" onClick={handleLogout}>
                Log Out
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
