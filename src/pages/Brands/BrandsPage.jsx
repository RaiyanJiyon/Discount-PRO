import BrandCard from "../../components/brands/BrandCard";
import SearchBar from "../../components/brands/SearchBar";
import Navbar from "../../components/shared/Navbar";

const BrandsPage = () => {
    return (
        <div>
            <Navbar />
            
            <div>
                <SearchBar />
            </div>
            
            <div>
                <BrandCard />
            </div>
        </div>
    );
};

export default BrandsPage;