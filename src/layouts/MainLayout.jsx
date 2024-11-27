import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div className="w-11/12 max-w-7xl mx-auto">
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;