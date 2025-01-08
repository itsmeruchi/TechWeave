import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ element: Component, isAdmin, ...rest }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);

  // Assuming 'loading' state is used to track when auth state is ready
  useEffect(() => {
    if (!loading) {
      setIsLoading(false);
    }
  }, [loading]);

  if (isLoading) {
    return <div>Loading...</div>; // Or replace with a spinner or some other loading indicator
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (isAdmin && user.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return Component;
};

export default ProtectedRoute;
