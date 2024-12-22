
import { Link } from "react-router-dom";
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";

import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";



const Navber = () => {

    const { user, logOut } = useContext(AuthContext);

    // const handleLogout = () => {
    //     logOut().then(() => {
    //         console.log("User logged out");
    //     }).catch((error) => {
    //         console.error("Logout error:", error);
    //     });
    // };



    return (
        <div className="navbar bg-cyan-200 w-full mb-10 fixed top-0 left-0 z-50">
            {/* Mobile Dropdown */}
            <details className="dropdown lg:hidden">
                <summary className="btn btn-ghost">
                    <PiDotsThreeOutlineVerticalDuotone />
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/All Foods">All Foods</Link></li>
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
                <Link to="/AllFoods">All Foods</Link>
                <Link to="/Gallery">Gallery</Link>

            </div>

            {/* User Section */}
            <div className="navbar-end gap-2">
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
            </div>
        </div>
    );
};

export default Navber;