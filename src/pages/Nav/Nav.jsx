import React, { useEffect, useState } from "react";
import "./nav.scss";
import logo from "../../images/logo/logo.svg";
import { AiOutlineUser, AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";

function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [islogin, setIsLogin] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isClicked ? (
        <div className="navitems">
          <Link to="/" onClick={() => setIsClicked((prev) => !prev)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsClicked((prev) => !prev)}>
            About
          </Link>
          <Link to="/gallery" onClick={() => setIsClicked((prev) => !prev)}>
            Gallery
          </Link>
          <Link to="/schedule" onClick={() => setIsClicked((prev) => !prev)}>
            Schedule
          </Link>
          <Link to="/blog" onClick={() => setIsClicked((prev) => !prev)}>
            Blog
          </Link>
          <Link to="/pricing" onClick={() => setIsClicked((prev) => !prev)}>
            Pricing
          </Link>
          <Link to="/classes" onClick={() => setIsClicked((prev) => !prev)}>
            Classes
          </Link>
          <Link to="/contact" onClick={() => setIsClicked((prev) => !prev)}>
            Contact
          </Link>
        </div>
      ) : (
        <div className={isScrolled ? "nav" : "scroll"}>
          <div className="left">
            <img src={logo} alt="" />
          </div>
          <div className="center">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/classes">Classes</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="right">
            <Link to={islogin ? "/profile/5" : "/login"}>
              <AiOutlineUser />
            </Link>
            <a className="navlist" href="#" onClick={() => setIsClicked(true)}>
              <AiOutlineUnorderedList />
            </a>
            {!islogin ? (
              <div className="item">
                <Link to="/classes">
                  <button>+</button>
                  <h3>Join Class Now</h3>
                </Link>
              </div>
            ) : (
              <h3 className="name">Muhammad Muzammal</h3>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
