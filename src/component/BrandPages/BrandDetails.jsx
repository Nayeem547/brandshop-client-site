import React, { useEffect, useState } from "react";
import BrandPages from "./BrandPages";
import { useLoaderData, useParams } from "react-router-dom";


const BrandDetails = () => {
//   const [cart, setCart] = useState({});

//    const { _id } = useParams();
//    console.log(_id);

  const cartes = useLoaderData();
    // console.log(cartes);

//   useEffect(() => {
//     const findCard = cartes?.find((cart) => cart._id ==  _id);
//     setCart(findCard);
//   }, [_id, cartes]);

  return (
    <div>
      <div className="flex   justify-center">
        <BrandPages cart={cartes}></BrandPages>
      </div>

     
    </div>
  );
};

export default BrandDetails;
