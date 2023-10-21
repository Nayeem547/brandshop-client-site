import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = ({cart}) => {

    let { ObjectId } = useParams();
    const [brandDetails, setbrandDetails] = useState({});
  
    useEffect(() => {
      fetch(`http://localhost:5000/cart/${ObjectId}`)
        .then((res) => res.json())
        .then((data) => setbrandDetails(data[0]));
    }, []);
    console.log(brandDetails);
  
     const  {
        names,
        image,
        Brand,
        
        Price, 
        description,
      } = cart || {}
      console.log(cart);
    return (
        <div className='  flex flex-col justify-center items-center ' >
        <div className=' flex w-full justify-center items-center  ' >
            <img className=' rounded-xl h-96 ' src={image} alt="" />
        </div>
        <div className='   space-y-5 justify-center flex flex-col ' >
            <h1 className=' text-4xl font-semibold '>{Brand}</h1>
            
            <h2 className=' text-2xl text-yellow-500 font-semibold ' >{names}</h2>
            <p className=' text-lg w-auto ' >{description}</p>
             <p className=' font-semibold  text-yellow-600' > Price: {Price}</p>
        </div>
      </div>
    );
};

export default CarDetails;