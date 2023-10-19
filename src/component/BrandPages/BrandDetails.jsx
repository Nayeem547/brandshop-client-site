import React, { useEffect, useState } from 'react';
import BrandPages from './BrandPages';
import { useLoaderData, useParams } from 'react-router-dom';

const BrandDetails = () => {
    const [card, setCard] = useState({});
    
    const {id} = useParams();
    console.log(id);

    const carded = useLoaderData();
        console.log(carded);

        useEffect(()=> {
            
            const findCard = carded?.find(card=>card.id == id);
            setCard(findCard);
 
         }, [id, carded]);
        
        
    return (
        <div className='flex   justify-center' >
          <BrandPages  card={card} ></BrandPages>
           
        </div>
    );
};

export default BrandDetails;