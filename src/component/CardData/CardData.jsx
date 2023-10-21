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
        <div>
            <h1>Card item : </h1>
            <div className=' grid grid-cols-1 gap-4  lg:grid-cols-2 '>

            
            {
                cartes?.map((cart) => <CardBox key={cart._id} cart={cart} ></CardBox> )
            }
            </div>
        </div>
    );
};

export default CardData;