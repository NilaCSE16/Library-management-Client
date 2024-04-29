import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  if (currentUser) {
    return children;
  }
  return (
    <Navigate
      to="/signIn"
      state={{ from: location.pathname }}
      replace
    ></Navigate>
  );
};

export default PrivateRoute;
