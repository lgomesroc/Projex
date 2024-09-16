import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';  // Supondo que você tenha um AuthContext

function PrivateRoute({ component: Component }) {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Component /> : <Navigate to="/login" />;
}

export default PrivateRoute;
