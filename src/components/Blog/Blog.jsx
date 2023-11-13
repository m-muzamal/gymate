import React from "react";
import "./blog.scss";
import Header from "../../pages/Header/Header";
import img1 from "../../images/blog/blog1.jpg";
import img2 from "../../images/blog/blog2.jpg";
import img3 from "../../images/blog/blog3.jpg";
import img4 from "../../images/blogpage/4.jpg";
import img5 from "../../images/blogpage/5.jpg";
import img6 from "../../images/blogpage/6.jpg";
import img7 from "../../images/blogpage/7.jpg";
import post1 from "../../images/blogpage/recent1.jpg";
import post2 from "../../images/blogpage/recent2.jpg";
import post3 from "../../images/blogpage/recent3.jpg";
import post4 from "../../images/blogpage/recent4.jpg";
import post5 from "../../images/blogpage/recent5.jpg";
import post6 from "../../images/blogpage/recent6.jpg";
import sidebar from "../../images/blogpage/sidebar1.png";
import { FaLayerGroup } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();
  return (
    <>
      <Header title="Blog" />
      <section className="blog">
        <div className="container">
          <div className="left">
            <div id="yoga" className="content">
              <div className="img">
                <img src={img1} alt="" />
              </div>
              <p className="img-detail">
                <span>
                  {" "}
                  <FaLayerGroup />{" "}
                </span>
                By <strong> Admin </strong>| March 11, 2022 | Yoga
              </p>
              <h2 className="title-black">Yoga For Everyone in 2022</h2>
              <p className="txt">
                Authoritatively disseminate multimedia based total linkage
                through market-driven methodolContinually transform integrated
                results vis-a-vis multidisciplinary manufacture Appropriately
                foster fullresearched innovation rather than backend supply.
                when an unknown printer took a galley.
              </p>
              <button className="btn" onClick={() => navigate("/pricing")}>
                Purchase Now <AiOutlineArrowRight />
              </button>
            </div>
            <div id="crossfit" className="content">
              <div className="img">
                <img src={img2} alt="" />
              </div>
              <p className="img-detail">
                <span>
                  {" "}
                  <FaLayerGroup />{" "}
                </span>
                By <strong> Admin </strong>| March 11, 2022 | Weight Lifting
              </p>
              <h2 className="title-black">
                Getting Back Into CrossFit After Vacation
              </h2>
              <p className="txt">
                Authoritatively disseminate multimedia based total linkage
                through market-driven methodolContinually transform integrated
                results vis-a-vis multidisciplinary manufacture Appropriately
                foster fullresearched innovation rather than backend supply.
                when an unknown printer took a galley.
              </p>
              <button className="btn" onClick={() => navigate("/pricing")}>
                Purchase Now <AiOutlineArrowRight />
              </button>
            </div>
            <div id="fitness" className="content">
              <div className="img">
                <img src={img3} alt="" />
              </div>
              <p className="img-detail">
                <span>
                  {" "}
                  <FaLayerGroup />{" "}
                </span>
                By <strong> Admin </strong>| March 11, 2022 | Yoga
              </p>
              <h2 className="title-black">Meet Fitness Ambassador Grace</h2>
              <p className="txt">
                Authoritatively disseminate multimedia based total linkage
                through market-driven methodolContinually transform integrated
                results vis-a-vis multidisciplinary manufacture Appropriately
                foster fullresearched innovation rather than backend supply.
                when an unknown printer took a galley.
              </p>
              <button className="btn" onClick={() => navigate("/pricing")}>
                Purchase Now <AiOutlineArrowRight />
              </button>
            </div>
            <div id="meditation" className="content">
              <div className="img">
                <img src={img4} alt="" />
              </div>
              <p className="img-detail">
                <span>
                  {" "}
                  <FaLayerGroup />{" "}
                </span>
                By <strong> Admin </strong>| March 11, 2022 | Yoga
              </p>
              <h2 className="title-black">
                The Best are European Materls Direct
              </h2>
              <p className="txt">
                Authoritatively disseminate multimedia based total linkage
                through market-driven methodolContinually transform integrated
                results vis-a-vis multidisciplinary manufacture Appropriately
                foster fullresearched innovation rather than backend supply.
                when an unknown printer took a galley.
              </p>
              <button className="btn" onClick={() => navigate("/pricing")}>
                Purchase Now <AiOutlineArrowRight />
              </button>
            </div>
            <div id="boxing" className="content">
              <div className="img">
                <img src={img5} alt="" />
              </div>
              <p className="img-detail">
                <span>
                  {" "}
                  <FaLayerGroup />{" "}
                </span>
                By <strong> Admin </strong>| March 11, 2022 | Fitness
              </p>
              <h2 className="title-black">
                Give your Fitness a Boost with our Gym
              </h2>
              <p className="txt">
                Authoritatively disseminate multimedia based total linkage
                through market-driven methodolContinually transform integrated
                results vis-a-vis multidisciplinary manufacture Appropriately
                foster fullresearched innovation rather than backend supply.
                when an unknown printer took a galley.
              </p>
              <button className="btn" onClick={() => navigate("/pricing")}>
                Purchase Now <AiOutlineArrowRight />
              </button>
            </div>
            <div id="fitness" className="content">
              <div className="img">
                <img src={img6} alt="" />
              </div>
              <p className="img-detail">
                <span>
                  {" "}
                  <FaLayerGroup />{" "}
                </span>
                By <strong> Admin </strong>| March 11, 2022 | Boxing
              </p>
              <h2 className="title-black">
                How to Get Fit Your Kids Moving Throughout The Summer
              </h2>
              <p className="txt">
                Authoritatively disseminate multimedia based total linkage
                through market-driven methodolContinually transform integrated
                results vis-a-vis multidisciplinary manufacture Appropriately
                foster fullresearched innovation rather than backend supply.
                when an unknown printer took a galley.
              </p>
              <button className="btn" onClick={() => navigate("/pricing")}>
                Purchase Now <AiOutlineArrowRight />
              </button>
            </div>
            <div className="content">
              <div className="img">
                <img src={img7} alt="" />
              </div>
              <p className="img-detail">
                <span>
                  {" "}
                  <FaLayerGroup />{" "}
                </span>
                By <strong> Admin </strong>| March 11, 2022 | Boxing
              </p>
              <h2 className="title-black">
                Give your fitness a boost with our new gym challenge
              </h2>
              <p className="txt">
                Authoritatively disseminate multimedia based total linkage
                through market-driven methodolContinually transform integrated
                results vis-a-vis multidisciplinary manufacture Appropriately
                foster fullresearched innovation rather than backend supply.
                when an unknown printer took a galley.
              </p>
              <button className="btn" onClick={() => navigate("/pricing")}>
                Purchase Now <AiOutlineArrowRight />
              </button>
            </div>
          </div>
          <div className="right">
            <div className="content">
              <div className="search">
                <input type="text" placeholder="Search..." />
                <button className="btn-primary">
                  <AiOutlineSearch />
                </button>
              </div>
              <div className="category">
                <h3 className="bold">Categories</h3>
                <div className="item">
                  <p className="txt">
                    <MdKeyboardArrowRight /> Body Building
                  </p>
                  <p className="txt">(4)</p>
                </div>
                <div className="item">
                  <p className="txt">
                    <MdKeyboardArrowRight /> Boxing
                  </p>
                  <p className="txt">(4)</p>
                </div>
                <div className="item">
                  <p className="txt">
                    <MdKeyboardArrowRight /> Crossfit
                  </p>
                  <p className="txt">(4)</p>
                </div>
                <div className="item">
                  <p className="txt">
                    <MdKeyboardArrowRight /> Fitness
                  </p>
                  <p className="txt">(4)</p>
                </div>
                <div className="item">
                  <p className="txt">
                    <MdKeyboardArrowRight /> Meditation
                  </p>
                  <p className="txt">(4)</p>
                </div>
                <div className="item">
                  <p className="txt">
                    <MdKeyboardArrowRight /> Youga
                  </p>
                  <p className="txt">(4)</p>
                </div>
              </div>
              <div className="category">
                <h3 className="bold">Recent Posts</h3>
                <div className="post">
                  <img src={post1} alt="" />
                  <div className="about">
                    <p className="txt">March 22, 2022</p>
                    <a href="#yoga" className="txtbold">
                      Yoga For Everyone in 2022
                    </a>
                  </div>
                </div>
                <div className="post">
                  <img src={post2} alt="" />
                  <div className="about">
                    <p className="txt">March 22, 2022</p>
                    <a href="#crossfit" className="txtbold">
                      Getting Back Into CrossFit
                    </a>
                  </div>
                </div>
                <div className="post">
                  <img src={post3} alt="" />
                  <div className="about">
                    <p className="txt">March 22, 2022</p>
                    <a href="#fitness" className="txtbold">
                      Meet Fitness Abassador Grace
                    </a>
                  </div>
                </div>
                <div className="post">
                  <img src={post4} alt="" />
                  <div className="about">
                    <p className="txt">March 22, 2022</p>
                    <a href="#meditation" className="txtbold">
                      The best are European Meditation Practitioner
                    </a>
                  </div>
                </div>
                <div className="post">
                  <img src={post5} alt="" />
                  <div className="about">
                    <p className="txt">March 22, 2022</p>
                    <a href="#boxing" className="txtbold">
                      Learn Boxing With Our Trainer John
                    </a>
                  </div>
                </div>
                <div className="post">
                  <img src={post6} alt="" />
                  <div className="about">
                    <p className="txt">March 22, 2022</p>
                    <a href="#fitness" className="txtbold">
                      How To Get Lean For The Summer
                    </a>
                  </div>
                </div>
              </div>
              <div className="category">
                <h3 className="bold">Popular Tags</h3>
                <div className="tags">
                  <p className="txt">#Crossfit</p>
                  <p className="txt">#Gym</p>
                  <p className="txt">#Meditation</p>
                  <p className="txt">#Fitness</p>
                  <p className="txt">#Running</p>
                  <p className="txt">#Workout</p>
                  <p className="txt">#Yoga</p>
                  <p className="txt">#Boxing</p>
                </div>
              </div>
              <div className="discount">
                <img src={sidebar} alt="" />
                <h2 className="title-black">GYMAT</h2>
                <div className="dis-content">
                  <h2 className="title-white big">34%</h2>
                  <p className="small">Flat Discount</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
