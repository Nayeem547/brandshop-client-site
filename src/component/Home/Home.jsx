import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";

import Cardmap from "../BrandCategory/Cardmap";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const getCarded = useLoaderData();
  const [carded, setCarded] = useState([]);
useEffect(() => {
  setCarded(getCarded);
}, []);
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

      <div className=" items-center text-center flex justify-center flex-col gap-5 bg-sky-950 " >
      <h2 className='  text-3xl text-white font-extrabold ' >Brand Category</h2>
       <Cardmap carded={carded} ></Cardmap>
      </div>
    </div>
  );
};

export default Home;
