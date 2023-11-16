/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (isLoading || isAdminLoading) {
        return <span className="loading text-purple-500 loading-dots loading-lg"></span>
    }
    if (user && isAdmin) {
        return children

    }
    return <Navigate to="/login" state={location.pathname} replace ></Navigate>
};

export default AdminRoute;