import { Navigate } from "react-router-dom";
import { displayToast } from "./Utility/displayToast";
import { useAuth } from "@/hooks/useAuth";
interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {

  const isAuthenticated = useAuth(); 

  if (isAuthenticated === null) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-pulse text-lg">Loading...</div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    displayToast("Please login","rgb(36, 116, 130)");
    return <Navigate to="/login" />;
  } else
    return children
};

export default ProtectedRoute;
