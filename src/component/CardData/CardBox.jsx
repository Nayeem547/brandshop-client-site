
import { Link } from "react-router-dom";



const CardBox = ({cart}) => {
    const {_id, names, image, Brand,  Price,  description} = cart;
      
    // useEffect(() => {
    //   fetch(`https://project-mongodb.vercel.app/cartCategory/${brandName}`)
    //     .then((res) => res.json())
    //     .then((data) => setBrandInfo(data[0]));
    // }, []);
    
    return (
        <div className="   " >
            <div className="card   h-[500px] w-[300px] lg:w-[500px]  bg-base-100 shadow-xl">
  <figure><img className=" rounded-2xl w-[100%] h-[350px] " src={image} alt="Movie"/></figure>
  <div className="card-body h-[300px] ">
    <h2 className="card-title  ">{names}</h2>
    <h2  >{Brand}</h2>
    <p>{Price}</p>
    <p className=" italic text-sm " >{description}</p>

    <div className=" flex justify-center gap-2 " >

   
    <Link to={`/carDetails/${_id}`} >

    <button className=" btn " >Details</button>
    </Link> 
    <Link to={`/Updatecart/${_id}`} >
    <button className=" btn ">Update</button>
    </Link>
    </div>
    
  </div>
</div>
    
        </div>
    );
};

export default CardBox;