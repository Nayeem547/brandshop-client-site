
import { Link, NavLink } from "react-router-dom";
import logo from  "./PhotoRoom-20231019_133331.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const Navbar = () => {
  
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
    .then()
    .catch()

  }

  return (
    <div className="">
      <nav className="navbar bg-black text-white space-y-7 flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-center py-7 mx-auto ">
        <div className=" navbar-center md:navbar-start lg:navbar-start">
          <img src={logo} className=" w-[155px] h-20 "  alt="" />
        </div>
        <div className="navbar-center ">
          <ul className=" text-xl font-medium flex mt-5 md:mt-0 lg:mt-0 gap-6 ">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " bg-yellow-500 px-3 py-2 text-white rounded-lg "
                    : ""
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/AddCart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-[#701e43] px-3 py-2 text-white rounded-tl-3xl rounded-br-3xl  "
                    : ""
                }
              >
                AddCart
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " bg-[#701e43] px-3 py-2 text-white rounded-tl-3xl rounded-br-3xl "
                    : ""
                }
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>

         <div className="  navbar-end gap-2">
         
         {user ? (
            <button onClick={handleSignOut} className=" btn ">Sign Out</button>
          ) : (
            <Link to="/signin">
              <button className=" btn "> Login</button>
            </Link>
          )}

          <Link to="/signUp">
            <button className=" btn "> SignUp</button>
          </Link>
        </div> 
      </nav>
    </div>
  );
};

export default Navbar;
