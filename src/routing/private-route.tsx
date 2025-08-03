import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PATHS_CONFIG } from './paths.ts';

interface PrivateRouteProps {
    isAuthenticated: boolean;
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ isAuthenticated, children }) => {
    const location = useLocation();

    if (!isAuthenticated) {
        return <Navigate to={PATHS_CONFIG.signIn.path} state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
