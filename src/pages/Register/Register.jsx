import React, { useState } from "react";
import "./register.scss";
import Header from "../Header/Header";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (
      userData.name === "" ||
      userData.email === "" ||
      userData.password === "" ||
      userData.confirmPassword === ""
    ) {
      setError("Please fill all the fields.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    } else if (userData.password !== userData.confirmPassword) {
      setError("Password is not match.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    } else {
      alert("You are registered successfully.");
      navigate("/login");
    }
  };

  return (
    <>
      <Header title="Registration page" />
      <section className="register">
        <div className="container">
          <div className="content">
            <h2 className="login-title">Sign Up</h2>
            <form className="form login_form">
              {error ? <p className="error">{error}</p> : ""}
              <input
                type="text"
                placeholder="Full name"
                name="name"
                value={userData.name}
                onChange={changeInputHandler}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={changeInputHandler}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={changeInputHandler}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={changeInputHandler}
              />
              <button
                type="submit"
                className="btn primary"
                onClick={handleClick}
              >
                Register
              </button>
              <small>
                Already have an account?{" "}
                <Link to="/login" className="span">
                  sign in
                </Link>
              </small>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
