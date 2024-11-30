import { useContext } from "react";
import Navbar from "../../components/shared/Navbar";
import { authContext } from "../../contexts/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Profile = () => {
    const { user } = useContext(authContext);
    console.log(user)
    return (
        <div>
            <Helmet>
                <title>Profile | Coupon Pro</title>
            </Helmet>

            <div>
                <Navbar />
            </div>
            <div className='pb-24'>
                {/* heading div */}
                <div className='bg-[#E1713B] pb-48'>
                    <h2 data-aos="fade-down" className='text-3xl font-bold text-white pt-8 text-center'>Welcome {user ? user.displayName : "Loading"}</h2>
                </div>

                {/* details div */}
                <div className=" w-11/12 mx-auto flex flex-col justify-center items-center bg-white rounded-3xl shadow-lg -mt-32 p-8">
                    <div className="avatar">
                        <div className="w-40 -mt-20 rounded-full">
                            <img src={user ? user.photoURL : "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png"} />
                        </div>
                    </div>
                    <h3 className='text-2xl font-bold pt-4 text-center'>{user ? user.name : "Anonymous name"}</h3>
                    <p className="text-sm text-gray-600 pb-4">{user ? user.email : "Anonymous email"}</p>
                    <Link to={"/profile/update"}>
                        <button className="btn bg-[#E1713B] text-white">Update Profile</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Profile;