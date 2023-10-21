import React from 'react';

const CarDetails = ({cart}) => {
     const  {
        names,
        image,
        Brand,
        
        Price, 
        description,
      } = cart || {}
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-6  lg:grid-cols-2 ' >
        <div>
            <img className=' rounded-xl h-96 ' src={image} alt="" />
        </div>
        <div className='  text-left space-y-5 justify-center flex flex-col ' >
            <h1 className=' text-4xl font-semibold '>{Brand}</h1>
            
            <h2 className=' text-2xl text-yellow-500 font-semibold ' >{names}</h2>
            <p className=' text-lg w-auto ' >{description}</p>
             <p className=' font-semibold  text-yellow-600' > Price: {Price}</p>
        </div>
      </div>
    );
};

export default CarDetails;