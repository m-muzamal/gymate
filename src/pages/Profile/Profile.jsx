import React, { useState } from "react";
import Header from "../Header/Header";
import Chart from "./Chart/Chart";
import "./profile.scss";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    } else {
      alert("Data update successfully.");
      navigate(`/profile/${id}`);
    }
  };

  return (
    <>
      <Header title="Your Profile" />
      <section className="profile">
        <div className="container">
          <div className="profile_details">
            <Link to={`/myPlan/${id}`} className="btn-primary">
              My Plan
            </Link>
            <div className="avatar_wrapper">
              <Chart />
            </div>
            <h1 className="title-black">Muhammad Muzammal</h1>
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
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
