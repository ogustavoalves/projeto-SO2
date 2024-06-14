import { Navigate } from "react-router-dom";
import { useState } from "react";

const ProtectedRoute = ({ element }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    return isLoggedIn ? element : <Navigate to="/sign-in" />;
};

export default ProtectedRoute;