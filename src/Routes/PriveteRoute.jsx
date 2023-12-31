/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PriveteRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <span className="loading text-purple-500 loading-dots loading-lg"></span>
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={location?.pathname} replace ></Navigate>
};

export default PriveteRoute;