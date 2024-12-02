import { useEffect, useState } from "react";
import Button from "../ui/Button";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const BrandCard = ({ searchTerm }) => {
    const [brands, setBrands] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await fetch('/data/couponData.json');
                const data = await response.json();
                setBrands(data);
            } catch (error) {
                setError("Error fetching data");
                console.error("Error occurs", error);
            }
        };

        fetchBrands();
    }, []);

    const filteredBrands = brands.filter((brand) =>
        (brand.brand_name || '').toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (error) {
        return <div className="text-red-500 text-center">Error: {error}</div>;
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-6 w-11/12 max-w-7xl mx-auto my-16">
            {filteredBrands.map(brand => (
                <div
                    key={brand.id}
                    className="card bg-base-100 border border-gray-200 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                    <figure className="px-10 pt-6">
                        <img
                            src={brand.brand_logo}
                            alt={`${brand.brand_name} logo`}
                            className="rounded-xl h-28"
                        />
                    </figure>
                    <div className="card-body items-center text-center space-y-1">
                        <h2 className="card-title text-xl">{brand.brand_name}</h2>
                        <StarRating rating={brand.rating} />
                        <p className="text-[#4b5563] text-xs font-medium">{brand.description}</p>
                        {
                                brand.isSaleOn ? (
                                    <p data-aos="fade-down" className="text-red-500 font-bold">Sale is On</p>
                                ) : (
                                    <p className="font-bold">No Sale Right Now</p>
                                )
                        }
                        <Link className="w-full mt-4" to={`/brands/${brand.id}`}>
                            <Button text="View Coupons" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

const StarRating = ({ rating }) => (
    <StarRatings
        rating={rating}
        starRatedColor="orange"
        numberOfStars={5}
        name="rating"
        starDimension="20px"
        starSpacing="2px"
    />
);

export default BrandCard;