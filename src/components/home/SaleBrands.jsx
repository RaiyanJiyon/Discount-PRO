import { useEffect, useState } from "react";

const SaleBrands = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('/data/saleBrandsData.json') // Ensure this path is correct
            .then(res => res.json())
            .then(data => setBrands(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h2 className="text-3xl text-[#E1713B] font-bold text-center">🔥 Sale is On! Grab Your Deals Now!</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
                {
                    brands.map((brand, idx) => (
                        <div key={idx} className="card border border-gray-200 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <figure className="px-10 pt-6">
                                <img
                                    src={brand.imageUrl}
                                    alt={`${brand.title} logo`} // Improved alt text
                                    className="rounded-xl h-28" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-2xl">{brand.title}</h2>
                                <p className="text-[#4b5563] text-xl font-medium">{brand.category}</p>
                                <p className="">Total Coupons: {brand.totalCoupons}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SaleBrands;
