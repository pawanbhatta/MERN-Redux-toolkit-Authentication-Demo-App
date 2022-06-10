import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const auth = useSelector((state) => state?.auth);
  let token = JSON.parse(localStorage.getItem("token"));

  const location = useLocation();

  console.log("auth", auth);
  console.log("token", token);
  useEffect(() => {
    token = JSON.parse(localStorage.getItem("token"));
  }, [token]);

  if (token || auth.isAuth) return children;

  if (!token)
    return (
      <Navigate
        to="/login"
        replace={true}
        state={{ path: location.pathname }}
      />
    );
};

export default RequireAuth;
