
import { useAuthStore } from "@/store/authStore";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = () => {
const {user} = useAuthStore()
console.log(user, 'users');

return user ? <Outlet/> : <Navigate to="/authentication"/>
}

export default PrivateRoutes