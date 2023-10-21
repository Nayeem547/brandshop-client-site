import React from 'react';
import Footer from '../Footer/Footer';
import WEdo from '../Planing/WEdo';

const Blog = () => {
    return (
        <div className=' mt-10 ' >
            <div className=' bg-sky-400 pb-16 pt-16 '>
            <div>
        <div className=' text-center bg-sky-400 '>
          <h1 className=" md:text-2xl text-xl lg:text-4xl font-bold ">
            
            <span className=" text-yellow-400 md:text-2xl text-xl lg:text-5xl ">Hello!</span> Buy Your Car!
          </h1>
        </div>

        <div className=" mt-16 italic  md:text-xl text-md lg:text-2xl grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 text-center items-center gap-4 ">
          <div className=" space-y-4 flex justify-center flex-col items-center">
            <p>
             
            </p>
            <p>Tell Me About Your Choice So Brands</p>
          </div>
          <div className="space-y-4 flex justify-center flex-col items-center">
            <p>
              
            </p>
            <p>Tell Me About Your Car</p>
          </div>
          <div className="space-y-4 flex justify-center flex-col items-center">
            <p>
             
            </p>
            <p>Tell Me About Your Dreams </p>
          </div>
          <div className="space-y-4 flex justify-center flex-col items-center">
            <p>
             
            </p>
            <p>Tell Me About Your dicription So We Can Begin Planing</p>
          </div>
        </div>
      </div>
            </div>
            <div className=' mt-10 bg-blue-200 pb-16 pt-14 '>
               <WEdo></WEdo>
               <div>
                
               </div>
            </div>

            <footer>
                <Footer></Footer>
            </footer>
            
        </div>
    );
};

export default Blog;