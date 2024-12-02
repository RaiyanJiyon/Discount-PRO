import logo from '../../assets/images/logo.png'
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Button from '../../components/ui/Button';
import { useContext, useEffect } from 'react';
import { authContext } from '../../contexts/AuthProvider';
import ErrorToaster from '../../components/ToasterNotification/ErrorToaster';
import SuccessToaster from '../../components/ToasterNotification/SuccessToaster';
import { Helmet } from 'react-helmet';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const { setUser, user, updateUserProfile, createUserWithGoogle, createUserWithEmail } = useContext(authContext);

    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        createUserWithGoogle()
            .then(() => {
                SuccessToaster('Successfully Sign In with Google');
                navigate('/');
            })
            .catch(error => {
                ErrorToaster(error.message);
            });
    };

    const handleRegisterForm = (e) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get('name');
        const email = formData.get('email');
        const photoURL = formData.get('photoURL');
        const password = formData.get('password');
        const confirmPassword = formData.get('confirm-password');

        console.log({ name, email, photoURL, password, confirmPassword });

        const validPassword = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!validPassword.test(password)) {
            ErrorToaster('Password should be at least 8 character');
            return;
        };

        if (password !== confirmPassword) {
            ErrorToaster('The password confirmation does not match.');
            return;
        };

        createUserWithEmail(email, password)
            .then(userCredential => {
                return updateUserProfile(name, photoURL);
            })
            .then(() => {
                SuccessToaster('Successfully Created Account');
                form.reset();
                navigate('/auth/login');
            })
            .catch(error => {
                ErrorToaster(error.message);
            });
    };

    return (
        <section>
            <Helmet>
                <title>Register | Coupon Pro</title>
            </Helmet>

            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto mt-6 lg:py-0">
                <Link to={"/"} className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
                    Discount Pro
                </Link>
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Create an account
                        </h1>
                        <form onSubmit={handleRegisterForm} className="space-y-4 md:space-y-6" action="#">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                                <div onClick={handleGoogleSignIn} className="flex items-center md:justify-center gap-2 w-full border border-gray-300 px-4 py-2 rounded-lg cursor-pointer">
                                    <FaGoogle className="text-xl" />
                                    <span className="text-xs font-medium">Sign up with Google</span>
                                </div>
                                <div className="flex items-center md:justify-center gap-2 w-full border border-gray-300 px-4 py-2 rounded-lg cursor-pointer">
                                    <FaGithub className="text-xl" />
                                    <span className="text-xs font-medium">Sign up with Github</span>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your name</label>
                                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name" required />
                            </div>
                            <div>
                                <label htmlFor="photoURL" className="block mb-2 text-sm font-medium text-gray-900">Your photo url</label>
                                <input type="text" name="photoURL" id="photoURL" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="photo url" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                            </div>
                            <div>
                                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
                                <input type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="terms" className="font-light text-gray-500">I accept the <a className="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <Button text={"Create an account"} />
                            <p className="text-sm font-light text-gray-500">
                                Already have an account? <Link to={"/auth/login"} className="font-medium text-[#E1713B] hover:underline">Login here</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;