import React from 'react';

import BrandCategory from './BrandCategory';

const Cardmap = ({carded}) => {
    console.log(carded);
    return (
        <div className='   mx-auto itemes-center grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 ' >
             
            {
                carded.map(card=> <BrandCategory  key={card.id} card={card} ></BrandCategory> )

            }
        </div>
    );
};

export default Cardmap;