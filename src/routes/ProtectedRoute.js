import { Navigate } from "react-router-dom";

import useSecurity from "../hooks/security/useSecurity";

export const ProtectedRoute = ({ children }) => {

  console.log("ProtectedRoute...")

  const { isLogin } = useSecurity()

  console.log("ProtectedRoute... isLogin = " + isLogin())
  
  if (!isLogin()) {

    // logout()
    
    return <Navigate to="/" />;
  }
  return children;
}