import { Helmet } from "react-helmet";
import BrandCard from "../../components/brands/BrandCard";
import SearchBar from "../../components/brands/SearchBar";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";
import { useEffect, useState } from "react";

const BrandsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <div>
            <Helmet>
                <title>Brands | Coupon Pro</title>
            </Helmet>

            <div>
                <Navbar />
            </div>

            <div>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <div>
                <BrandCard searchTerm={searchTerm} />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default BrandsPage;