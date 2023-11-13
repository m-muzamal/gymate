import React from "react";
import "./gallery.scss";
import Header from "../../pages/Header/Header";
import img1 from "../../images/GalleryPage/1.jpg";
import img2 from "../../images/GalleryPage/2.jpg";
import img3 from "../../images/GalleryPage/3.jpg";
import img4 from "../../images/GalleryPage/4.jpg";
import img5 from "../../images/GalleryPage/5.jpg";
import img6 from "../../images/GalleryPage/6.jpg";
import img7 from "../../images/GalleryPage/7.jpg";
import img8 from "../../images/GalleryPage/8.jpg";
import img9 from "../../images/GalleryPage/9.jpg";
import img10 from "../../images/GalleryPage/10.jpg";
import img11 from "../../images/GalleryPage/11.jpg";
import img12 from "../../images/GalleryPage/12.jpg";

function Gallery() {
  return (
    <>
      <Header title="Gallery" />
      <section className="gallery">
        <div className="container">
          <div className="img">
            <img src={img1} alt="" />
          </div>
          <div className="img">
            <img src={img2} alt="" />
          </div>
          <div className="img">
            <img src={img3} alt="" />
          </div>
          <div className="img">
            <img src={img4} alt="" />
          </div>
          <div className="img">
            <img src={img5} alt="" />
          </div>
          <div className="img">
            <img src={img6} alt="" />
          </div>
          <div className="img">
            <img src={img7} alt="" />
          </div>
          <div className="img">
            <img src={img8} alt="" />
          </div>
          <div className="img">
            <img src={img9} alt="" />
          </div>
          <div className="img">
            <img src={img10} alt="" />
          </div>
          <div className="img">
            <img src={img11} alt="" />
          </div>
          <div className="img">
            <img src={img12} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
