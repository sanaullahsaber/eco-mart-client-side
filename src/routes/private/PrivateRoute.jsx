import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
  const { user, loading } = useAuth();
  const location = useLocation()

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>
  }

  if (user) {
    return children
  }

  return <Navigate to={"/login"} state={{from: location}} replace/>
};

export default PrivateRoute;