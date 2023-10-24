import React from 'react';
import { useContext } from 'react';
import Swal from "sweetalert2";
import { AuthContext } from '../Provider/AuthProvider';
import Footer from '../Footer/Footer';

const CarDetails = ({cart}) => {

    const {user} = useContext(AuthContext);
    console.log(user);

    // let { id } = useParams();
    // const [brandDetails, setbrandDetails] = useState({});
  
    // useEffect(() => {
    //   fetch(`https://project-mongodb.vercel.app/cart/${id}`)
    //     .then((res) => res.json())
    //     .then((data) => setbrandDetails(data[0]));
    // }, []);
    // console.log(brandDetails);
  
     const  {
        _id,
        names,
        image,
        Brand,
        
        Price, 
        description,
      } = cart || {}
      


      const handleAddToCartes = () => {
        // Create an object representing the item to be added to the cart
        const itemToAdd = {
            email: user.email,
          productId: _id, // Assuming _id is part of brandDetails
          names: names,
          image: image,
          Brand: Brand,
          Price: Price,
          description: description,
        };
      
        // Send a POST request to your server to add the item to the cart
        fetch('https://project-mongodb.vercel.app/userStore', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(itemToAdd),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
                title: "Success!",
                text: "User Update succesfully",
                icon: "success",
                confirmButtonText: "Cool",});
                console.log(data);
            // Handle the response from the server
            
            // You can also update your UI to indicate that the item was added to the cart
          })
          .catch((error) => {
            // Handle any errors that occur during the request
            console.error('Error adding item to the cart:', error);
          });
      };


    return (

        <div>
        <div className=' w-[300px] md:w-[600px] lg:w-[800px] mx-auto  flex flex-col justify-center items-center ' >
        <div className=' flex  justify-center items-center  ' >
            <img className=' rounded-xl  h-80 md:h-96 lg:h-96 ' src={image} alt="" />
        </div>
        <div className='   space-y-5 justify-center flex flex-col ' >
            <h1 className=' text-4xl font-semibold '>{Brand}</h1>
            
            <h2 className=' text-2xl text-yellow-500 font-semibold ' >{names}</h2>
            <p className=' text-lg w-auto ' >{description}</p>
             <p className=' font-semibold  text-yellow-600' > Price: {Price}</p>
             <button onClick={handleAddToCartes}  className=' btn ' > Add Cart </button>
        </div>
      </div>
      

      <footer>
        <Footer></Footer>
      </footer>


      </div>
    );
};

export default CarDetails;