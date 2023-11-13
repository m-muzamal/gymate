import React from "react";
import "./galleryPage.scss";
import img from "../../images/bgImage/img.svg";
import bg from "../../images/gallery/bg-icon.png";
import img1 from "../../images/gallery/img1.jpg";
import img2 from "../../images/gallery/img2.jpg";
import img3 from "../../images/gallery/img3.jpg";
import img4 from "../../images/gallery/img4.jpg";
import img5 from "../../images/gallery/img5.jpg";

function GalleryPage() {
  return (
    <section className="galleryPage">
      <img className="bg" src={bg} alt="" />
      <div className="container">
        <div className="imgtext">
          <p>GYMAT GALLERY</p>
          <img src={img} alt="" />
        </div>
        <h2 className="title-black">Our Workplace Gallery</h2>
        <p className="txt">
          Our Workplace Gallery features modern office, team collaboration, and
          fun culture. Attracts talents and showcases company's work atmosphere.
        </p>
        <div className="images">
          <div className="left">
            <div className="top">
              <div className="img">
                <img src={img1} alt="" />
              </div>
            </div>
            <div className="bottom">
              <div className="img">
                <img src={img3} alt="" />
              </div>
              <div className="img">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-top">
              <div className="img">
                <img src={img2} alt="" />
              </div>
            </div>
            <div className="right-bottom">
              <div className="img">
                <img src={img5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GalleryPage;
