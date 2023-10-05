import PropTypes from "prop-types";
import useAuth from "../utility/useAuth";
import { Navigate } from "react-router-dom";
const PrivetRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/register"></Navigate>;
  }
  return children;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
