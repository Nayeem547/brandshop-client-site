import React from 'react';
import CarDetails from './CarDetails';
import { useLoaderData} from 'react-router-dom';
// import { useState } from 'react';
// import { useEffect } from 'react';


const CarDetailsMap = () => {

    // const [cart, setCart] = useState({});

    // const {_id} = useParams();
    // console.log(_id);

     const cartes = useLoaderData()
     console.log(cartes);
       
    //  useEffect(()=> {
            
    //     const findCart = cartes.find(cart=>cart._id === _id);
    //     setCart(findCart);

    //  }, [_id, cartes]);

    return (
        <div className='   mx-auto itemes-center grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 ' >
             
             {
                cartes.map( cart => <CarDetails key={cart._id} cart={cart} > </CarDetails>)
             }
        
             </div>
    );
};

export default CarDetailsMap;