import PropTypes from "prop-types";
import useAuth from "../utility/useAuth";
import { Navigate, useLocation } from "react-router-dom";
const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();

  const location = useLocation();
  console.log(location);
  if (loading) {
    return <span className="loading loading-bars loading-lg"></span>;
  }
  if (!user) {
    return <Navigate to="/login" state={location.pathname}></Navigate>;
  }
  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
