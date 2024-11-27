import logo from '../../assets/images/logo.png'
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from '../../components/ui/Button';

const Login = () => {
    return (
        <section className="bg-gray-50 mt-6">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <Link to={"/"} className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
                    <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
                    Discount Pro
                </Link>
                <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-2">
                                <div className="flex items-center md:justify-center gap-2 w-full border border-gray-300 px-4 py-2 rounded-lg cursor-pointer">
                                    <FaGoogle className="text-xl" />
                                    <span className="text-sm font-medium">Log in with Google</span>
                                </div>
                                <div className="flex items-center md:justify-center gap-2 w-full border border-gray-300 px-4 py-2 rounded-lg cursor-pointer">
                                    <FaGithub className="text-xl" />
                                    <span className="text-sm font-medium">Log in with Github</span>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-[#1e0e5c] hover:underline">Forgot password?</span>
                            </div>
                            <Button text='Sign In' />
                            <p className="text-sm font-light text-gray-500">
                                Don’t have an account yet? <Link to={"/auth/register"} className="font-medium text-[#E1713B] hover:underline">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;