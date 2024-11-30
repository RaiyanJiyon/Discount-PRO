import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useNavigate } from "react-router-dom";

const TopBrands = () => {
    const [brands, setBrands] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const response = await fetch('/data/couponData.json');
                const data = await response.json();
                setBrands(data);
            } catch (error) {
                console.error("Error fetching brand data:", error.message);
            }
        };

        fetchBrands();
    }, []);

    const handleLogo = () => {
        navigate('/brands');
    };

    return (
        <div>
            <div data-aos="zoom-in-down" className="space-y-4">
                <h2 className="text-3xl text-[#E1713B] font-bold text-center">Top Brands</h2>
                <p className="w-full md:w-4/5 mx-auto text-[#394e6a] text-lg text-center font-medium">
                    Explore the finest selection of top brands renowned for their quality and innovation.
                    Let&apos;s dive into their exclusive offerings!
                </p>
            </div>

            <div className="flex items-center mt-10">
                <Marquee pauseOnHover={true}>
                    {brands.map((brand, index) => (
                        <img
                            key={index}
                            className="w-28 mr-6 cursor-pointer"
                            onClick={handleLogo}
                            src={brand.brand_logo}
                            alt={brand.brand_name || "Brand logo"}
                        />
                    ))}
                </Marquee>
            </div>
        </div>
    );
};

export default TopBrands;
