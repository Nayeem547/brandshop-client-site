import React from 'react';

import BrandCategory from './BrandCategory';
import { useLoaderData } from 'react-router-dom';

const Cardmap = () => {
    const cartes = useLoaderData();
    console.log(cartes)
    
    return (
        <div className='   mx-auto itemes-center grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 ' >
             
   {
         cartes.map((cart) => <BrandCategory  key={cart._id} cart={cart} > </BrandCategory> )

            }
        </div>
    );
};

export default Cardmap;