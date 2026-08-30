import { Navigate } from "react-router-dom"


function RoleRroute({ role, izin, users}){
    if(role !== izin){
        return <Navigate to="/dashboard" replace />
    }
    return users
}

export default RoleRroute
