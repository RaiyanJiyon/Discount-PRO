import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <div className="bg-[#111827] text-gray-300 py-8">
            <div className='flex flex-col md:flex-row justify-evenly gap-6 w-11/12 mx-auto'>
                <div className='space-y-3'>
                    <div className='flex items-center gap-1'>
                        <img className='w-8' src={logo} alt="logo" />
                        <h2 className='text-2xl font-bold text-[#E1713B]'>CouponPro</h2>
                    </div>
                    <p className='text-sm'>Save more with the best coupon deals from across the web.</p>
                </div>
                <div className='space-y-3'>
                    <h4 className='text-white font-medium'>Stay Updated</h4>
                    <p className='text-sm'>Subscribe to get the latest coupons and deals delivered to your inbox.</p>
                    <fieldset className="form-control w-80">
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn bg-[#E1713B] join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </div>
                <div className='space-y-3'>
                    <h4 className='text-white font-medium'>Contact Us</h4>
                    <p className='text-sm'>Have a question? We&apos;re here to help.</p>
                    <h3 className='text-white text-lg font-bold'>+1 234 567 890</h3>
                    <div className='flex items-center gap-4 text-2xl'>
                        <FaInstagram className='cursor-pointer hover:text-[#E1713B]' />
                        <FaFacebook className='cursor-pointer hover:text-sky-500' />
                        <FaTwitter className='cursor-pointer hover:text-sky-500' />
                    </div>
                </div>
            </div>
            <div>
                <div className='border border-t-white mt-3'></div>
                <div className='w-11/12 mx-auto text-center pt-6 space-y-2'>
                    <p className='text-xs '>© 2024 CouponHive. All Rights Reserved.</p>
                    <p className='text-xs '>Privacy PolicyTerms and Conditions</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;