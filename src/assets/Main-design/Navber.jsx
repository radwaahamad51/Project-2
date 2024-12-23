
import { Link } from "react-router-dom";
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";

import { AuthContext } from "../Provider/AuthProvider";
import { useContext, useState } from "react";
import ThemeToggle from "../theam";



const Navber = () => {

    const { user, logOut } = useContext(AuthContext);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    console.log(user)

    const handleLogout = () => {
        logOut().then(() => {
            console.log("User logged out");
        }).catch((error) => {
            console.error("Logout error:", error);
        });
    };


    return (
        <div className="navbar bg-cyan-200 w-full mb-10 fixed top-0 left-0 z-50">
            {/* Mobile Dropdown */}
            <details className="dropdown lg:hidden">
                <summary className="btn btn-ghost">
                    <PiDotsThreeOutlineVerticalDuotone />
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/AllFoods/:id">All Foods</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>

                </ul>
            </details>

            {/* Logo */}
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl text-blue-600 italic">
                    Restaurant <br /> Management
                </a>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex gap-4">
                <Link to="/" className="font-mono">Home</Link>
                <Link to="/AllFoods/:id">All Foods</Link>
                <Link to="/Gallery">Gallery</Link>

            </div>

            {/* User Section */}
            <div className="navbar-end gap-5 ">
                {/* If logged in */}
                {user && user?.email ? (
                    <button onClick={logOut} className="btn btn-primary ">
                        Log-Out
                    </button>
                ) : (
                    <Link to="/login" className="btn btn-primary ">
                        Login
                    </Link>
                )}
            



            {/* other */}
            {/* User Section */}
          
                {/* If logged in */}
                {user?.email ? (
                    <div className="dropdown dropdown-end">
                        <div
                            className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                            data-tip={user.displayName || "User"}
                            tabIndex={0}
                        >
                            <div className="w-10 rounded-full">
                                <img
                                    src={user.photoURL || "https://via.placeholder.com/150"}
                                    alt="User Avatar"
                                />
                            </div>

                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        >
                            <li>
                                <p className="text-sm text-gray-500">
                                    Logged in as <strong>{user.displayName}</strong>
                                </p>
                                <li className="px-4 py-2 hover:bg-gray-100">
                                    <Link to="/useroder">My Foods</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100">
                                    <Link to="/addfood">Add food</Link>
                                </li>
                                <li className="px-4 py-2 hover:bg-gray-100">
                                    <Link to="/oder">My Orders</Link>
                                </li>
                            </li>
                            <li>
                                <button onClick={handleLogout} className="btn btn-error w-full">
                                    Log Out
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    // If not logged in
                    // <Link to="/login" className="btn btn-primary">
                    //     Login
                    // </Link>
                    <div></div>
                )}

                {/* Theme Toggle */}
                <div className="flex-none">
                    <ThemeToggle />
                </div>
            </div>

        </div>
    );
};

export default Navber;