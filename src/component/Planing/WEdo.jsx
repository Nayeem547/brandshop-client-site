import React from 'react';

const WEdo = () => {
    return (
        <div className=' mt-16 mb-10 '>
            <div className=' text-center  '>
            <h2 className=' text-xl lg:text-4xl font-extrabold ' >What We Do</h2>
            </div>
            
            <div className=' grid  grid-cols-1 lg:grid-cols-2 items-center text-center   ' >
                <div className=' text-xl lg:text-3xl text-yellow-600 space-y-4 underline font-extrabold italic ' >
                    <h2>Brands Of Car</h2>
                    <h2>Update Models Car</h2>
                    <h2>Many Brand  </h2>
                </div>
                <div className='text-xl lg:text-3xl text-yellow-600 space-y-4  underline font-extrabold italic'>
                    <h2>Car Booking</h2>
                    <h2>Car Sell</h2>
                    <h2>Brands Promote</h2>
                </div>
            </div>
        </div>
    );
};

export default WEdo;