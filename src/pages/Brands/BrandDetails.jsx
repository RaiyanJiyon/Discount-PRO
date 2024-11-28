import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import BrandProfile from "../../components/brands/BrandProfile";

const BrandDetails = () => {
    const loaderBrands = useLoaderData();
    const { id } = useParams();

    const filterBrands = loaderBrands.filter(brand => brand.id === id);

    return (
        <div>
            <Navbar />

            {filterBrands.length > 0 ? (
                <div className="flex justify-center items-center">
                    {filterBrands.map(brand => (
                        <BrandProfile key={brand.id} brand={brand} />
                    ))}
                </div>
            ) : (
                <div className="text-center p-4">
                    <p className="text-red-500 text-lg font-bold">Brand not found</p>
                </div>
            )}
        </div>
    );
};

export default BrandDetails;
