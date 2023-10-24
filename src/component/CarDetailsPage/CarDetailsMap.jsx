import React from "react";
import CarDetails from "./CarDetails";
import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const CarDetailsMap = ({}) => {
  const [cart, setCart] = useState({});

  const { id } = useParams();

  const cartes = useLoaderData();

  useEffect(() => {
    // const findCart = cartes.find(cart=>cart._id === _id);
    // setCart(findCart);
  }, [id, cartes]);

  return (
    <div className="  mx-auto text-center flex flex-col   mt-20 justify-center  itemes-center  ">
      <CarDetails key={cart.id} cart={cartes}>
        {" "}
      </CarDetails>
    </div>
  );
};

export default CarDetailsMap;
