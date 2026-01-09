
import { useAuthStore } from "@/store/authStore";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = () => {
const {user} = useAuthStore()
console.log(user, 'users');

return user.status === 'admin' ? <Outlet/> : <Navigate to="/"/>
}

export default PrivateRoutes