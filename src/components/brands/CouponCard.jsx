import PropTypes from "prop-types";
import CopyToClipboard from "react-copy-to-clipboard";
import 'react-toastify/dist/ReactToastify.css';
import SuccessToaster from "../ToasterNotification/SuccessToaster";

const CouponCard = ({ brand }) => {
    const handleCopyClip = (couponCode) => {
        SuccessToaster(`Copied: ${couponCode}`);
    };


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-11/12 mx-auto mt-6 mb-20">
            {brand.coupons.map((coupon, idx) => (
                <div key={idx} className="card bg-base-100 border border-gray-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-[#E1713B] font-semibold">{coupon.coupon_code}</h2>
                        <p className="font-medium">{coupon.description}</p>
                        <p className="text-sm text-gray-700">Expires: {coupon.expiry_date}</p>
                        <p className="text-sm text-gray-700">Condition: {coupon.condition}</p>
                        <p className="text-sm text-gray-700">Type: {coupon.coupon_type}</p>
                        <div className="card-actions justify-end w-full mt-4">
                            <CopyToClipboard text={coupon.coupon_code} onCopy={() => handleCopyClip(coupon.coupon_code)}>
                                <button className="btn bg-orange-500 text-white font-bold w-full">Copy Code</button>
                            </CopyToClipboard>
                            <a href={brand.shop_link} target="_blank" className="w-full">
                                <button className="btn bg-green-600 text-white font-bold w-full">Use Now</button>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

// Add prop validation
CouponCard.propTypes = {
    brand: PropTypes.object.isRequired, // children must be a object and is required
};

export default CouponCard;
