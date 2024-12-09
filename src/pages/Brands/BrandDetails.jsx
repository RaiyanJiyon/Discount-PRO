import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import BrandProfile from "../../components/brands/BrandProfile";
import CouponCard from "../../components/brands/CouponCard";
import Footer from "../../components/shared/Footer";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

const BrandDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const loaderBrands = useLoaderData();
    const { id } = useParams();

    const filterBrands = loaderBrands.filter(brand => brand.id === id);

    return (
        <div>
            <Helmet>
                <title>Brand Details | Coupon Pro</title>
            </Helmet>

            <div>
                <Navbar />
            </div>

            {filterBrands.length > 0 ? (
                <div className="flex justify-center items-center">
                    {filterBrands.map(brand => (
                        <div key={brand.id}>
                            <BrandProfile brand={brand} />
                            <CouponCard brand={brand} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center p-4">
                    <p className="text-red-500 text-lg font-bold">Brand not found</p>
                </div>
            )}

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default BrandDetails;
