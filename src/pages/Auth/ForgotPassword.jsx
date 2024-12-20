import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useContext, useEffect, useState } from "react";
import { authContext } from "../../contexts/AuthProvider";
import SuccessToaster from "../../components/ToasterNotification/SuccessToaster";
import ErrorToaster from "../../components/ToasterNotification/ErrorToaster";
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    

    const { passwordReset } = useContext(authContext);
    const location = useLocation();
    const [email, setEmail] = useState(location.state?.email || '');

    const handleForgetPasswordForm = (e) => {
        e.preventDefault();
        passwordReset(email)
            .then(() => {
                SuccessToaster("Password changed successfully");
                window.open('https://mail.google.com', '_blank');
            })
            .catch(error => {
                ErrorToaster(error.message);
            });
    };

    return (
        <section className="bg-gray-50">
            <Helmet>
                <title>Forgot Password | Coupon Pro</title>
            </Helmet>

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Forgot password?
                        </h1>
                        <p className="text-sm font-light text-gray-500">
                            Remember your password? <Link to={"/auth/login"} className="font-medium text-[#E1713B] hover:underline">Login here</Link>
                        </p>
                        <form onSubmit={handleForgetPasswordForm} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={email} 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                    placeholder="name@company.com" 
                                    required 
                                />
                            </div>
                            <button type="submit" className="w-full text-white bg-[#E1713B] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center">Reset Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
