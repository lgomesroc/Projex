import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <nav>
      <h2>Projex</h2>
      <button onClick={logout}>Logout</button>
    </nav>
  );
};

export default Navbar;
