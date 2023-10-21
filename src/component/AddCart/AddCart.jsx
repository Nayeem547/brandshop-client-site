import React from "react";
import Swal from "sweetalert2";

const AddCart = () => {
  const handleAddCart = (event) => {
    event.preventDefault();
    const form = event.target;
    const names = form.names.value;
    const image = form.image.value;
    const Brand = form.Brand.value;
    const brand_image = form.brand_image.value;
    const banner_image_one = form.banner_image_one.value;
    const banner_image_two = form.banner_image_two.value;
    const banner_image_three = form.banner_image_three.value;

    const Price = form.Price.value;
    const description = form.description.value;

    const newCard = {
      names,
      image,
      Brand,
      brand_image,
      Price, 
      description,
    };
  

    fetch(`https://project-mongodb-rizjsodj7-nayeem547s-projects.vercel.app/cart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCard),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "User added succesfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });

    fetch("https://project-mongodb-rizjsodj7-nayeem547s-projects.vercel.app/cartCategory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        Brand,
        brand_image,
        banner_image_one,
        banner_image_two,
        banner_image_three,
      }),
    }).then(res => res.json())
    .then((data) => { 
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Category added succesfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
    });
  };
  return (
    <div>
      <h2 className=" text-3xl font-extrabold ">Add a Card</h2>
      <form onSubmit={handleAddCart}>
        <div className=" md:flex mb-8 gap-5 ">
          <div className=" form-control md:w-1/2 ">
            <label className=" label ">
              <span>Name</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="names"
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
                placeholder="description"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
        </div>
        <div className=" md:flex mb-8 gap-5">
          <div className=" form-control md:w-1/2 ">
            <label className=" label ">
              <span>Brand Image</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="brand_image"
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
                placeholder="image url"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        <div className=" md:flex mb-8 gap-5">
          <div className=" form-control md:w-1/2 ">
            <label className=" label ">
              <span>banner image two</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="banner_image_two"
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
                placeholder="image url"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        <div className="rating">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>

        <input
          type="submit"
          value="Add Card"
          className=" btn btn-block mt-8 bg-slate-800 text-white "
        />
      </form>
    </div>
  );
};

export default AddCart;
