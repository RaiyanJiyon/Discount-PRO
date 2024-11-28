import BrandCard from "../../components/brands/BrandCard";
import SearchBar from "../../components/brands/SearchBar";
import Footer from "../../components/shared/Footer";
import Navbar from "../../components/shared/Navbar";

const BrandsPage = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div>
                <SearchBar />
            </div>

            <div>
                <BrandCard />
            </div>

            <div>
                <Footer />
            </div>
        </div>
    );
};

export default BrandsPage;