import React from "react";
import "./FeatureComponent.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp, faBolt } from "@fortawesome/free-solid-svg-icons";

import serviceMap from "../../Assets/serviceMap.jpg";
import art from "../../Assets/Art.png";
import art2 from "../../Assets/Art 2.png";
import art6 from "../../Assets/Art 6.png";
import windowImg from "../../Assets/Group 1000004957.png";
import toastImg from "../../Assets/artimg.png";

// import bolt from '../../Assets/thunder.png';
import Marquee from "react-fast-marquee";


function Discovery() {
  return (
    <>
      <div
        className="container-fluid discoveryContainer p-0 pb-5"
        data-aos="zoom-in-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <div className="discoveryWrapper">
          <h4>
            <i>
              <FontAwesomeIcon icon={faBolt} style={{ color: "#FFD43B" }} />
            </i>
            Features
          </h4>

          <h1 style={{ color: "#ffc107" }}>Discover Our Capabilities</h1>

          <h5 style={{ color: "rgb(79, 88, 116)" }}>
            Unveiling our comprehensive range of services to cultivate your
            brand's potential and <br /> reach even more success.
          </h5>
        </div>

        <div className="container  lastMarquee p-0">
          <Marquee speed={30}>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
          </Marquee>
        </div>

        <div className="container py-3 lastMarquee p-0">
          <Marquee speed={30} direction="right">
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
            <span className="btn btn-lg  rounded-pill ">
              <FontAwesomeIcon icon={faArrowCircleUp} /> AI generation
            </span>
          </Marquee>
        </div>

        <div className="container p-0  discoveryImgContainer">
          <picture>
            <source
              style={{ width: "100%",  objectFit: "contain" }}
              media="(max-width: 767px)"
              srcSet={art}
            />
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={serviceMap}
            />
          </picture>
        </div>

        <div  className="container p-0 pt-5 discoveryImg2Container text-center">
          <div data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">
            <h6>How it works</h6>
            <h1>Simplifying E-Commerce for Every Seller</h1>
          </div>
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={art2}
          />
        </div>

        <div className="container p-0 pt-5 discoveryImg3Container text-center">
          <div
            data-aos="zoom-in-up"
            data-aos-easing="linear"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <h6>Inventory and SKUs</h6>
            <h1>Efficient Inventory Management, Real-Time SKU Alerts</h1>
          </div>
          <div className="twoImgContainer  d-flex text-start">
            <div className="w-50 pb-5">
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={windowImg}
              />
              <h2
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Inventory Management
              </h2>
              <p
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Track your inventory with a comprehensive dashboard, displaying
                real-time data on completed orders, pending stock, and more.
              </p>
            </div>
            <div className="w-50 pb-5">
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={toastImg}
              />
     
              <h2
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Real-Time SKU Alerts
              </h2>
              <p
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-duration="1000"
                data-aos-once="true"
              >
                Set specific thresholds for stock levels to get notified before
                critical items run out. Monitor order cancellations, new orders
                all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default React.memo(Discovery);
