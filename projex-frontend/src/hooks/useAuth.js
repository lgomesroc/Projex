import { useState, useEffect } from 'react';
import { isAuthenticated } from '../utils/auth';

const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const authStatus = isAuthenticated();
      setAuthenticated(authStatus);
    };
    checkAuth();
  }, []);

  return { authenticated };
};

export default useAuth;
