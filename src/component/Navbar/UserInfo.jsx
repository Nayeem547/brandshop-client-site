// import { data } from 'autoprefixer';
import React from 'react';
import { useContext } from 'react';
// import { useState } from 'react';

import { useEffect } from 'react';
 import { useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';



const UserInfo = () => {

  
    const {user} = useContext(AuthContext);
    
    const [userdata, setUserdata] = useState();
    

   const  handleinfo = () => {
    fetch(`https://project-mongodb.vercel.app/user/${user?.email}`) // Replace with your actual API endpoint
        .then((res) => res.json())
        .then((data) => {
           // Assuming the API response contains { name, img }
          setUserdata(data);
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
   }


    
    useEffect(() => {
      // Make an API request to fetch user data
      handleinfo();
    }, [user?.email]);
  
    // if (!user) {
    //     return <p>Loading...</p>;
    //   }

    return (
        <div className=' flex justify-center gap-2 items-center ' >
        <img className=" w-[40px] h-[40px] rounded-full " src={userdata?.img} alt="" />
        <h2 className=' text-lg font-semibold '>{userdata?.name}</h2>
      </div>
    );
};

export default UserInfo;