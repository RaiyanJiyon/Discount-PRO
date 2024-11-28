import { FaUser } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { authContext } from '../../contexts/AuthProvider';
import { useContext } from 'react';
import SuccessToaster from '../ToasterNotification/SuccessToaster';
import ErrorToaster from '../ToasterNotification/ErrorToaster';

const Navbar = () => {
    const { user, logOutUser } = useContext(authContext);
    const navigate = useNavigate();

    const links = (
        <>
            <NavLink to="/" className={({ isActive }) => isActive ? "text-[#E1713B] font-bold underline" : "text-black font-medium"}>
                Home
            </NavLink>
            <NavLink to="/brands" className={({ isActive }) => isActive ? "text-[#E1713B] font-bold underline" : "text-black font-medium"}>
                Brands
            </NavLink>
            <NavLink to="/about-dev" className={({ isActive }) => isActive ? "text-[#E1713B] font-bold underline" : "text-black font-medium"}>
                About Us
            </NavLink>
            {user && (
                <NavLink to="/profile" className={({ isActive }) => isActive ? "text-[#E1713B] font-bold underline" : "text-black font-medium"}>
                    Profile
                </NavLink>
            )}
        </>
    );

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                SuccessToaster("Log out successfully");
                navigate('/auth/login');
            })
            .catch(error => {
                ErrorToaster(error.message);
            });
    };

    return (
        <div className="navbar w-11/12 mx-auto mt-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <button tabIndex={0} className="btn btn-ghost lg:hidden" aria-label="Toggle navigation menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost flex items-center">
                    <img className="w-8" src={logo} alt="brand logo" />
                    <span className="text-2xl font-bold text-[#E1713B]">CouponPro</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 text-base">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-3">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <button tabIndex={0} className="btn btn-ghost btn-circle avatar" aria-label="User menu">
                            <div className="w-10 rounded-full">
                                <img
                                    alt={`${user.displayName} profile image`}
                                    src={user ? user.photoURL : ""} />
                            </div>
                        </button>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li>
                                <Link to="/profile" className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li onClick={handleLogOut}><a>Logout</a></li>
                        </ul>
                    </div>
                ) : (
                    <>
                        <Link to="/auth/register">
                            <button className="btn bg-[#E1713B] text-white font-bold"><FaUser />Sign Up</button>
                        </Link>
                        <Link to="/auth/login">
                            <button className="btn bg-[#E1713B] text-white font-bold"><FaArrowRightToBracket />Sign In</button>
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
