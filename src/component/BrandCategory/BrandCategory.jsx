import React from 'react';
import { Link } from 'react-router-dom';

const BrandCategory = ({card}) => {
    const {id,name, image_url} = card || {}
    return (
        <div>
          
            <Link to={`/branddetails/${id}`} >
            <div className="card   w-64 md:80 lg:w-96   bg-base-100 shadow-xl">
   <figure className="">
    <img src={image_url} alt="Shoes" className="rounded-xl w-full h-44 " />
     </figure>
     <div className="card-body  items-center text-center">
    <h2 className="card-title text-3xl font-bold  ">{name}</h2>
    
    
    
     
    
  </div>
           </div>
            </Link>
        
        </div>
    );
};

export default BrandCategory;