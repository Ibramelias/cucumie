import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext"


function PrivateRoute({ children }) {
    const { currentUser } = useAuth();

    return (
        currentUser && currentUser ? children : <Navigate to="/login" />
    )
}

export default PrivateRoute;
