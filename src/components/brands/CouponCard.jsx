import Button from "../ui/Button";

const CouponCard = ({ brand }) => {

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 mb-20">
            {
                brand.coupons.map((coupon, idx) => (
                    <div key={idx} className="card bg-base-100 border border-gray-200 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-[#E1713B] font-semibold">{coupon.coupon_code}</h2>
                            <p className="font-medium">{coupon.description}</p>
                            <p className="text-sm text-gray-700">Expires: {coupon.expiry_date}</p>
                            <p className="text-sm text-gray-700">Condition: {coupon.condition}</p>
                            <p className="text-sm text-gray-700">Type: {coupon.coupon_type}</p>
                            <div className="card-actions justify-end w-full mt-4">
                                <Button text="Copy Code" />
                                <button className="btn bg-green-600 text-white font-bold w-full">Use Now</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default CouponCard;