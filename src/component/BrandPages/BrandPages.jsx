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
    fetch(`https://project-mongodb.vercel.app/cartCategory/${brandName}`)
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


      <div className="  " >

      
      <div className="banner-slider  w-[250px] md:w-[700px] lg:w-[1400px]    justify-center items-center text-center mx-auto ">
        <Slider {...settings}>
          <div className="slide relative">
            <img
              className=" w-[100%] h-[250px] md:h-[300px] lg:h-[500px] "
              src={brandInfo.banner_image_one}
            />
            
          </div>
          <div className="slide">
            <img
              className=" w-[100%] h-[250px] md:h-[300px] lg:h-[500px] "
              src={brandInfo.banner_image_two}
            />
            
          </div>
          <div className="slide">
            <img
              className=" w-[100%] h-[250px] md:h-[300px]  lg:h-[500px] "
              src={brandInfo.banner_image_three}
            />
            
          </div>
        </Slider>
      </div>

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
