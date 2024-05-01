import React, { useRef, useState } from "react";
import "./contact.scss";
import Header from "../../pages/Header/Header";
import emailjs from "@emailjs/browser";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [input, setInput] = useState({
    name: "",
    email: "",
    about: "",
    message: "",
  });

  const handleChange = (e) => {
    setInput((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(input);
    emailjs
      .sendForm(
        "service_3l5p8mt",
        "template_42g870d",
        form.current,
        "qE64s7b4KhVIb9Rvk"
      )
      .then(
        () => {
          // console.log("SUCCESS!");
          alert("Your feedback is submited");
          setInput({
            name: "",
            email: "",
            about: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <Header title="Contact Us" />
      <section className="contact">
        <div className="container">
          <div className="left">
            <h2 className="title-black">
              We are here for help you! To Shape Your Body.
            </h2>
            <p className="txt">
              At Gymate, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
            <div className="items">
              <div className="item">
                <div className="content">
                  <h3 className="bold">New York City, USA</h3>
                  <p className="txt">
                    85 Briston Mint Street, London, E1 8LG, USA
                  </p>
                </div>
                <div className="content">
                  <h3 className="bold">Information</h3>
                  <p className="txt">+000-123-4567 gymat@gymail.com</p>
                </div>
              </div>
              <div className="item">
                <div className="content">
                  <h3 className="bold">Opening Hours</h3>
                  <p className="txt">Mon to Fri: 7:30 am — 1:00 am</p>
                  <p className="txt">Mon to Fri: 7:30 am — 1:00 am</p>
                </div>
                <div className="content">
                  <h3 className="bold">Follow Us On</h3>
                  <div className="icons">
                    <div className="icon">
                      <FaLinkedinIn />
                    </div>
                    <div className="icon">
                      <FaFacebookF />
                    </div>
                    <div className="icon">
                      <FaInstagram />
                    </div>
                    <div className="icon">
                      <FaTwitter />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <h3 className="contact-title">Leave Us Your Info</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Full Name*"
                name="name"
                value={input.name}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Email Address*"
                name="email"
                value={input.email}
                onChange={handleChange}
                required
              />
              <select
                name="about"
                value={input.about}
                onChange={handleChange}
                required
              >
                <option value="Body Building">Body Building</option>
                <option value="Boxing">Boxing</option>
                <option value="Running">Running</option>
                <option value="Fittness">Fittness</option>
                <option value="Yoga">Yoga</option>
                <option value="Karate">Karate</option>
                <option value="Workout">Workout</option>
                <option value="Medication">Medication</option>
                <option value="Cycling">Cycling</option>
              </select>
              <textarea
                cols="0"
                rows="8"
                placeholder="Comments"
                name="message"
                value={input.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn-primary">
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
