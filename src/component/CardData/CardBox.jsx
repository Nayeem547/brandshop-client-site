import { Link } from "react-router-dom";


const CardBox = ({cart}) => {
    const {_id, names, image, Brand,  Price,  description} = cart;
    
    return (
        <div className="   " >
            <div className="card bg-sky-950 text-white h-[350px] w-[700px] card-side bg-base-100 shadow-xl">
  <figure><img className=" rounded-2xl w-[1200px] h-[350px] " src={image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title  ">{names}</h2>
    <h2  >{Brand}</h2>
    <p>{Price}</p>
    <p className=" italic text-sm " >{description}</p>
    <Link to={`/carDetails/${_id}`} >
    <button className=" btn " >Details</button>
    </Link> 
    <button className=" btn ">Update</button>
    
  </div>
</div>
        </div>
    );
};

export default CardBox;