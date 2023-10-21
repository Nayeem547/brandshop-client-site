import React from 'react';
import CarDetails from './CarDetails';
import { useLoaderData, useParams} from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


const CarDetailsMap = ({}) => {

    const [cart, setCart] = useState({});

    const {id} = useParams();
    console.log(id);

     const cartes = useLoaderData()
     console.log(cartes);
       
     useEffect(()=> {
            
        // const findCart = cartes.find(cart=>cart._id === _id);
        // setCart(findCart);

     }, [id, cartes]);

    return (
        <div className='  mx-auto text-center flex flex-col w-[1000px]  mt-20 justify-center  itemes-center  ' >
             
              <CarDetails key={cart.id}  cart={cartes} > </CarDetails>
              
        
             </div>
    );
};

export default CarDetailsMap;