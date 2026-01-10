import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = () => {
  const location = useLocation();
  const { authenticateUser, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        setIsLoading(!!user);
        await authenticateUser();
      } finally {
        setIsLoading(false);
      }
    };
    checkAuthentication();
  }, []);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        Loading...
      </div>
    );
  }

  // No user authenticated - redirect to login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Check if current route starts with /admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Admin user accessing admin routes - allow access
  if (user.status === "admin" && isAdminRoute) {
    return <Outlet />;
  }

  // Admin user accessing non-admin routes - allow access
  if (user.status === "admin" && !isAdminRoute) {
    return <Outlet />;
  }

  // Regular user with status 'user' - redirect to dashboard
  if (user.status === "user") {
    return <Navigate to="/dashboard" replace />;
  }

  // Any other case - redirect to home
  return <Navigate to="/" replace />;
};

export default PrivateRoutes;
