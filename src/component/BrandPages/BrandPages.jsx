import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardData from "../CardData/CardData";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Footer/Footer";

// import CardData from '../CardData/CardData';
const BrandPages = ({ cart }) => {
  let { brandName } = useParams();
  const [brandInfo, setBrandInfo] = useState({});

  useEffect(() => {
    fetch(`https://project-mongodb-rizjsodj7-nayeem547s-projects.vercel.app/cartCategory/${brandName}`)
      .then((res) => res.json())
      .then((data) => setBrandInfo(data[0]));
  }, []);
  console.log(brandInfo);

  // const { names, image, Brand, brand_image, Price, description } = cart || {};
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="banner-slider w-[270px] md:w-[700px] lg:w-[1400px]  justify-center items-center text-center mx-auto ">
        <Slider {...settings}>
          <div className="slide relative">
            <img
              className=" w-full h-[500px] "
              src={brandInfo.banner_image_one}
            />
            <div className=" space-y-4 text-center flex flex-col justify-center text-white items-center heading  ">
              <p
                data-aos="zoom-in-down"
                className=" text-lg md:text-xl lg:text-2xl font-light italic  "
              >
                We are the Event Management Specialists
              </p>
              <h1
                data-aos="zoom-in-down"
                className=" md:text-2xl text-xl lg:text-5xl font-sans font-medium "
              >
                WE PERSONALIZE YOUR WEDDING EVENTS{" "}
              </h1>
            </div>
          </div>
          <div className="slide">
            <img
              className=" w-full h-[500px] "
              src={brandInfo.banner_image_two}
            />
            <div className=" space-y-4 text-center flex flex-col justify-center text-white items-center heading  ">
              <p
                data-aos="zoom-in-down"
                className=" text-lg md:text-xl lg:text-2xl font-light italic  "
              >
                Birthday Event Management Specialists
              </p>
              <h1
                data-aos="zoom-in-down"
                className="md:text-2xl text-xl lg:text-5xl font-sans font-medium "
              >
                CELEBRATE YOUR EVENTSTHAT LASTS LONGER{" "}
              </h1>
            </div>
          </div>
          <div className="slide">
            <img
              className=" w-full h-[500px] "
              src={brandInfo.banner_image_three}
            />
            <div className=" space-y-4 text-center flex flex-col justify-center text-white items-center heading  ">
              <p
                data-aos="zoom-in-down"
                className=" text-lg md:text-xl lg:text-2xl font-light italic  "
              >
                Birthday Event Management Specialists
              </p>
              <h1
                data-aos="zoom-in-down"
                className="md:text-2xl text-xl lg:text-5xl font-sans font-medium "
              >
                CELEBRATE YOUR EVENTSTHAT LASTS LONGER{" "}
              </h1>
            </div>
          </div>
        </Slider>
      </div>

      <div  >
        <CardData></CardData>
      </div>
      <footer>
      <Footer></Footer>
    </footer>
    </div>
  );
};

export default BrandPages;
