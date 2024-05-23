import React from "react";
import HeroImg from "../../../../assets/HeroImg.png";
import { Carousel } from "react-bootstrap";

function HeroSection() {
  return (
    <div className="heroSection">
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-sm-12">
                <div className="content">
                  <h1 className="">Shop Easily Around the World in 1 Click</h1>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    quia quos vel quae dolores ea optio provident qui voluptatem
                    corporis.
                  </p>
                  <div className="heroSectionButton mt-4">
                    <button
                      href="#"
                      className="btn btn-info align-items-center"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 image">
                <img src={HeroImg} alt="hero_img" className="img-fluid" />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="row align-items-center justify-content-between">
              <div className="col-md-6 col-sm-12">
                <div className="content">
                  <h1 className="">Shop Easily Around the World in 1 Click</h1>
                  <p className="mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    quia quos vel quae dolores ea optio provident qui voluptatem
                    corporis.
                  </p>
                  <div className="heroSectionButton mt-4">
                    <button
                      href="#"
                      className="btn btn-info align-items-center"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-5 col-sm-12 image">
                <img src={HeroImg} alt="hero_img" className="img-fluid" />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default HeroSection;
