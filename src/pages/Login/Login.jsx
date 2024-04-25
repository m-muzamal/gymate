import React, { useState } from "react";
import Header from "../Header/Header";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/gymSlice/gymSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (userData.email === "" || userData.password === "") {
      setError("Please fill all the fields.");
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    try {
      const res = await axios.post("http://localhost:3001/gymate/login", {
        email: userData.email,
        password: userData.password,
      });
      if (res.data.success) {
        dispatch(login());
        alert("You are logged in successfully.");
        navigate("/");
      } else {
        setError(res.data.message || "Invalid email or password.");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } catch (error) {
      console.error(error);
      setError("Invalid email or password.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <>
      <Header title="Login Page" />
      <section className="login">
        <div className="container">
          <div className="content">
            <h2 className="login-title">Sign In</h2>
            <form className="form login_form">
              {error && <p className="error">{error}</p>}
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={changeInputHandler}
                autoFocus
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={changeInputHandler}
              />
              <button
                type="submit"
                className="btn primary"
                onClick={handleClick}
              >
                Login
              </button>
              <small>
                Don't have an account?{" "}
                <Link to="/register" className="span">
                  sign up
                </Link>
              </small>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
