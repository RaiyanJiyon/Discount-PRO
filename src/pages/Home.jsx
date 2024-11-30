import { Helmet } from "react-helmet";
import FAQ from "../components/home/FAQ";
import FavoriteCategories from "../components/home/FavoriteCategories";
import SaleBrands from "../components/home/SaleBrands";
import TopBrands from "../components/home/TopBrands";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Coupon Pro</title>
            </Helmet>

            <Header />
            <div className="mt-16">
                <TopBrands />
            </div>
            <div className="mt-10">
                <SaleBrands />
            </div>
            <div className="max-w-7xl mx-auto">
                <FavoriteCategories />
            </div>
            <div>
                <FAQ />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;