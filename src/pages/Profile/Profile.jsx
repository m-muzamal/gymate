import React, { useState } from "react";
import Header from "../Header/Header";
import Chart from "./Chart/Chart";
import "./profile.scss";
import { Link } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const id = 5;
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
              <p className="error profile-error">This is an error message</p>
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
              <button type="submit" className="btn-primary">
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
