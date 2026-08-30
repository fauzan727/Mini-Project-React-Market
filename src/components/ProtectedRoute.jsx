import { Navigate } from "react-router-dom"


function ProtectedRoute({ users }){
    const token = localStorage.getItem('user')
    
    if(!token){
        return <Navigate to="/login" replace />
    }

    return users
}

export default ProtectedRoute