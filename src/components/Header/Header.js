import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div className="header ">
      <div>
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/shipping">Shipping</Link>
        <span className="text-white me-2">{user.displayName}</span>
        {user?.email && (
          <button onClick={logOut} className="logOut">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
