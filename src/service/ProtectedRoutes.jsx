import { Outlet , Navigate } from "react-router-dom";

export const ProtectedRoutes  = () => {
    const auth = localStorage.getItem("user")
    return auth  ? <Outlet/> : <Navigate to="/"/>
}



