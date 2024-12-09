import { useContext } from "react";
import PropTypes from "prop-types";
import { authContext } from "../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();

    if (loading) {
        return(
            <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg text-[#E1713B]"></span>
        </div>
        )
    };

    if (user) {
        return children;
    };

    return <Navigate to={"/auth/login"} state={location.pathname} replace />
};

// Add prop validation
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired, // children must be a React node and is required
};

export default PrivateRoute;