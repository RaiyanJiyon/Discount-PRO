import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";

const BrandProfile = ({ brand }) => (
    <div className="flex flex-col items-center">
        <figure>
            <img
                src={brand.brand_logo}
                alt={`${brand.brand_name} logo`}
                className="rounded-xl w-56"
            />
        </figure>
        <div className="card-body -mt-8 items-center text-center space-y-1">
            <h2 className="card-title text-2xl font-bold">{brand.brand_name}</h2>
            <StarRating rating={brand.rating} />
            <p className="text-[#4b5563] text-xs font-medium">{brand.description}</p>
        </div>
    </div>
);

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

// Prop types for StarRating
StarRating.propTypes = {
    rating: PropTypes.number.isRequired, // rating must be a number and is required
};

// Add prop validation
BrandProfile.propTypes = {
    brand: PropTypes.object.isRequired, // children must be a object and is required
};

export default BrandProfile;
