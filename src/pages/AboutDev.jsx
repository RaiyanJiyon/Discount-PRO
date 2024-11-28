import AboutCouponPro from "../components/about/AboutCouponPro";
import ExtraSavings from "../components/about/ExtraSavings";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const AboutDev = () => {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="mt-6">
                <img src="https://couponhive-46f22.web.app/assets/about-us-banner-BN-dhTZy.jpg" alt="" />
            </div>
            <div className="mt-8">
                <AboutCouponPro />
            </div>
            <div className="mt-8">
                <ExtraSavings />
            </div>
            <div className="mt-8">
                <Footer />
            </div>
        </div>
    );
};

export default AboutDev;