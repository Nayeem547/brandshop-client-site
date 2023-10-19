import React from 'react';

const AddCart = () => {
    const handleAddCart = event => {
        event.preventDefault();

        const name = form.name.value;
        const image = form.image.value;
        const Brand = form.Brand.value;
        const Type = form.Type.value;
        const Price = form.Price.value;
        const description = form.description.value;
        
        const newCard = {name, image, Brand,  Type, Price,  description}
        console.log(newCard);
    }
    return (
        <div>
            <h2 className=' text-3xl font-extrabold '>Add a Card</h2>
            <form onSubmit={handleAddCart}  >
                <div className=' md:flex mb-8 gap-5 '>

                    <div className=' form-control md:w-1/2 '>
                        <label className=' label '>
                            <span>Name</span>
                        </label>
                        <label className=' input-group ' >
                            <input type="text" name='name' placeholder='Name' className=' input input-bordered w-full ' />
                        </label>
                    </div>
                    <div className=' form-control md:w-1/2 '>
                        <label className=' label '>
                            <span>Image</span>
                        </label>
                        <label className=' input-group ' >
                            <input type="text" name='image' placeholder='Photo url' className=' input input-bordered w-full ' />
                        </label>
                    </div>

                </div>
                <div className=' md:flex mb-8 gap-5'>

                    <div className=' form-control md:w-1/2 '>
                        <label className=' label '>
                            <span>Brand Name</span>
                        </label>
                        <label className=' input-group ' >
                            <input type="text" name='Brand' placeholder='Brand Name' className=' input input-bordered w-full ' />
                        </label>
                    </div>
                    <div className=' form-control md:w-1/2 '>
                        <label className=' label '>
                            <span>Type </span>
                        </label>
                        <label className=' input-group ' >
                            <input type="text" name='Type ' placeholder='Type Name' className=' input input-bordered w-full ' />
                        </label>
                    </div>

                </div>





                <div className=' md:flex mb-8 gap-5'>

                    <div className=' form-control md:w-1/2 '>
                        <label className=' label '>
                            <span>Price</span>
                        </label>
                        <label className=' input-group ' >
                            <input type="text" name='Price' placeholder='Price' className=' input input-bordered w-full ' />
                        </label>
                    </div>
                    <div className=' form-control md:w-1/2 '>
                        <label className=' label '>
                            <span>Short description </span>
                        </label>
                        <label className=' input-group ' >
                            <input type="text" name='description' placeholder='description' className=' input input-bordered w-full ' />
                        </label>
                    </div>

                </div>
               

                <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
      </div>
                  
          <input type="submit" value="Add Card" className=' btn btn-block mt-8 bg-slate-800 text-white ' />
            
            </form>
            
        </div>
    );
};

export default AddCart;