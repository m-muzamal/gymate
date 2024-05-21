import React, { useState } from "react";
import Header from "../Header/Header";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UseFetch from "../../hooks/UseFetch";

const Login = () => {
  const user = JSON.parse(sessionStorage.getItem("user")) || "";
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const data = UseFetch("http://localhost:3001/gymate/data");

  const findUser = () => {
    const person = data?.find((user) => user.email === userData.email);
    sessionStorage.setItem("user", JSON.stringify(person));
  };

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
        sessionStorage.setItem("login", true);
        alert("You are logged in successfully.");
        user?.email === userData.email
          ? sessionStorage.setItem("booking", true)
          : sessionStorage.setItem("booking", false) &&
            localStorage.setItem("progress", 0);
        findUser();
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
