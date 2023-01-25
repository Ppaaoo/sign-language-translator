import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContex";

const withAuth = Component => props => {
    const {user} = useUser()
    if(user !== null) {
        return <Component {...props} />
    } else {
        return <Navigate to="/" />
    }
}
export default withAuth