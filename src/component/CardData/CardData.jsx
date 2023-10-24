import React from 'react';
import { useLoaderData } from  'react-router-dom';
import CardBox from './CardBox';


const CardData = ({}) => {
    
    
    const cartes = useLoaderData({});
    // console.log(cartes)


    // const [cart, setCart] = useState({});

  // const { _id } = useParams();
  // console.log(_id);

  

  // useEffect(() => {
  //   const findCart = cartes?.find((cart) => cart._id == _id);
  //   setCart(findCart);
  // }, [_id, cartes]);

    
    return (
        <div className=' flex justify-center flex-col items-center mt-24 ' >
            <h1 className=' lg:text-3xl font-extrabold  twxt-xl mb-16 ' >Car item</h1>
            <div className=' grid grid-cols-1 gap-4 justify-center items-center   lg:grid-cols-2 '>

            
            {
                cartes?.map((cart) => <CardBox key={cart._id} cart={cart} ></CardBox> )
            }
            </div>
        </div>
    );
};

export default CardData;