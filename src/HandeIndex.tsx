import { Navigate } from "react-router-dom";


export function IndexHome(){
    return <Navigate to={'/auth/login'}/>
}