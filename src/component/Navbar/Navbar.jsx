import { Link, NavLink } from "react-router-dom";
import logo from "./PhotoRoom-20231019_133331.png";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import UserInfo from "./UserInfo";
// import UserInfo from "./UserInfo";
// import { useEffect } from "react";

const Navbar = () => {
  //   const users = useLoaderData();

  //  const {id} = useParams();

  //   const [userData, setUserData] = useState({ name: '', img: '' });

  //   useEffect(() => {
  //     // Make an API request to fetch user data
  //     fetch(`https://project-mongodb.vercel.app/user/${id}`) // Replace with your actual API endpoint
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUserData(data); // Assuming the API response contains { name, img }
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching user data:', error);
  //       });
  //   }, []);

  const { user, logOut } = useContext(AuthContext);
  const [themeStatus, setThemeStatus] = useState(false);
  const html = document.getElementById("html");

  const handleBgMode = () => {
    if (!themeStatus) {
      html.setAttribute("data-theme", "dark");
    } else {
      html.setAttribute("data-theme", "light");
    }
    setThemeStatus(!themeStatus);
  };

  const handleSignOut = () => {
    logOut().then().catch();
  };

  const handleToggleChange = (event) => {
    // 3. Update the themeStatus based on the checkbox status
    setThemeStatus(event.target.checked);
  };

  return (
    <div className="">
      <nav className="navbar bg-black text-white space-y-7 flex flex-col md:flex-cols lg:flex-row justify-center md:justify-between lg:justify-between items-center py-7 mx-auto ">
        <div className=" navbar-center md:navbar-start lg:navbar-start">
          <img src={logo} className=" w-[155px] h-20 " alt="" />
        </div>
        <div className="navbar-center ">
          <ul className=" text-md lg:text-xl font-medium flex mt-5 md:mt-0 lg:mt-0 gap-6 ">
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
                    ? "bg-yellow-500 px-3 py-2 text-white rounded-lg  "
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
                    ? "bg-yellow-500 px-3 py-2 text-white rounded-lg "
                    : ""
                }
              >
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mycart"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "bg-yellow-500 px-3 py-2 text-white rounded-lg "
                    : ""
                }
              >
                MyCart
              </NavLink>
            </li>
          </ul>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2  items-center text-center justify-center navar-center  lg:navbar-end gap-2">
          <div className=" flex items-center gap-2 ">
            <input
              className=" toggle toggle-md"
              onClick={() => handleBgMode()}
              type="checkbox"
            />

            {user ? (
              <button onClick={handleSignOut} className=" btn ">
                Sign Out
              </button>
            ) : (
              <Link to="/signin">
                <button className=" btn "> Login</button>
              </Link>
            )}

            <Link to="/signUp">
              <button className=" btn "> SignUp</button>
            </Link>

            <div></div>
          </div>

          <div>
            <UserInfo></UserInfo>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
