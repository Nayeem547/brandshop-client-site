import React from "react";
import { useContext } from "react";

import { useEffect } from "react";
import { useState } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);

  const [cartItems, setCartItems] = useState([]);
 

  useEffect(() => {
    // Fetch cart items from the server when the component mounts
    fetch(`https://project-mongodb.vercel.app/userStore/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCartItems(data));
  }, []);

    const handleDelete = (_id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
            console.log(result.isConfirmed);
          // Send a DELETE request to remove the item from the cart
          fetch(`https://project-mongodb.vercel.app/userStore/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                // Item deleted successfully, update the UI
                setCartItems((prevItems) =>
                  prevItems.filter((item) => item._id !== _id)
                );
                Swal.fire("Deleted!", "Your item has been deleted.", "success");
              } else {
                Swal.fire("Error!", "Failed to delete the item.", "error");
              }
            });
        }
      });
    };

  

  return (
    <div className=" flex justify-center mt-16 ">
      <ul className=" grid grid-cols-2 gap-5 items-center justify-center mx-auto ">
        {cartItems.map((item) => (
          <li key={item._id} >
            <div className="card bg-sky-950 text-white h-[500px] w-[300px] lg:w-[500px] bg-base-100 shadow-xl">
              <figure>
                <img
                  className="rounded-2xl w-[1200px] h-[350px]"
                  src={item.image}
                  
                />
              </figure>
              <div className="card-body h-[300px]">
                <h2 className="card-title">{item.names}</h2>
                <h2>{item.Brand}</h2>
                <p>{item.Price}</p>
                <p className="italic text-sm">{item.description}</p>
                <button onClick={() => handleDelete(item._id) } className="btn">Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyCart;
