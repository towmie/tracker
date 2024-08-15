import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const isAuth = false;

  useEffect(
    function () {
      if (!isAuth) navigate("/login");
    },
    [isAuth, navigate]
  );

  if (isAuth) return children;
}

export default ProtectedRoute;
