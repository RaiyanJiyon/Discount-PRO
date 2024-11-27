import FAQ from "../components/home/FAQ";
import FavoriteCategories from "../components/home/FavoriteCategories";
import SaleBrands from "../components/home/SaleBrands";
import TopBrands from "../components/home/TopBrands";
import Header from "../components/shared/Header";

const Home = () => {
    return (
        <div>
            <Header />
            <div className="mt-16">
                <TopBrands />
            </div>
            <div className="mt-10">
                <SaleBrands />
            </div>
            <div>
                <FavoriteCategories />
            </div>
            <div>
                <FAQ />
            </div>
        </div>
    );
};

export default Home;