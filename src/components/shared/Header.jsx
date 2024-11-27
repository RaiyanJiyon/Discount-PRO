import Banner from "../home/Banner";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div>
            <div>
            <Navbar />
            </div>
            <div className="mt-6">
                <Banner />
            </div>
        </div>
    );
};

export default Header;