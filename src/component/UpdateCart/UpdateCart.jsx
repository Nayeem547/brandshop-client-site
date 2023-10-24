import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateCart = ({}) => {
  const cartes = useLoaderData();
  const { _id, names, image, Brand, Price, description } = cartes;
  console.log(names);

  const handleUpdateCart = (event) => {
    event.preventDefault();
    const form = event.target;
    const names = form.names.value;
    const image = form.image.value;
    const Brand = form.Brand.value;

    const Price = form.Price.value;
    const description = form.description.value;

    const UpdateCard = {
      names,
      image,
      Brand,

      Price,
      description,
    };

    fetch(`https://project-mongodb.vercel.app/cart/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateCard),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "User Update succesfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    // fetch("https://project-mongodb.vercel.app/cartCategory", {
    //   method: "PUT",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     Brand,
    //     brand_image,
    //     banner_image_one,
    //     banner_image_two,
    //     banner_image_three,
    //   }),
    // }).then(res => res.json())
    // .then((data) => {
    //     if (data.insertedId) {
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Category added succesfully",
    //         icon: "success",
    //         confirmButtonText: "Cool",
    //       });
    //     }
    // });
  };
  return (
    <div>
      <h2 className=" text-3xl font-extrabold ">Add a Card</h2>
      <form onSubmit={handleUpdateCart}>
        <div className=" md:flex mb-8 gap-5 ">
          <div className=" form-control md:w-1/2 ">
            <label className=" label ">
              <span>Name</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="names"
                defaultValue={names}
                placeholder="Name"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
          <div className=" form-control md:w-1/2 ">
            <label className=" label ">
              <span>Image</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="image"
                defaultValue={image}
                placeholder="Photo url"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
        </div>
        <div className=" md:flex mb-8 gap-5">
          <div className=" form-control md:w-1/2 ">
            <label className=" label ">
              <span>Brand Name</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="Brand"
                defaultValue={Brand}
                placeholder="Brand Name"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        <div className=" md:flex mb-8 gap-5">
          <div className=" form-control md:w-1/2 ">
            <label className=" label ">
              <span>Price</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="Price"
                defaultValue={Price}
                placeholder="Price"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
          <div className=" form-control md:w-1/2 ">
            <label className=" label ">
              <span>Short description </span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="description"
                defaultValue={description}
                placeholder="description"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        {/* <div className=" md:flex mb-8 gap-5">
          <div className=" form-control md:w-1/2 ">
            <label className=" label ">
              <span>Brand Image</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="brand_image"
                defaultValue={brand_image}
                placeholder="image url"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
          <div className=" form-control md:w-1/2 ">
            <label className=" label ">
              <span>banner imagen one </span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="banner_image_one"
                defaultValue={banner_image_one}
                placeholder="image url"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
        </div> */}

        {/* <div className=" md:flex mb-8 gap-5">
          <div className=" form-control md:w-1/2 ">
            <label className=" label ">
              <span>banner image two</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="banner_image_two"
                defaultValue={banner_image_two}
                placeholder="image url"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
          <div className=" form-control md:w-1/2 ">
            <label className=" label ">
              <span>banner image three </span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="banner_image_three"
                defaultValue={banner_image_three}
                placeholder="image url"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
        </div> */}

        <input
          type="submit"
          value="Update Cart"
          className=" btn btn-block mt-8 bg-slate-800 text-white "
        />
      </form>
    </div>
  );
};

export default UpdateCart;
