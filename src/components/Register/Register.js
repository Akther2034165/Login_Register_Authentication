import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Register = () => {
  const {
    handleEmailChange,
    handleNameChange,
    handlePasswordChange,
    createUser,
    error,
  } = useAuth();
  const handleRegistration = (e) => {
    e.preventDefault();
    createUser();
  };
  return (
    <div>
      <div className="center">
        <h1>Register</h1>
        <form onSubmit={handleRegistration}>
          <div className="form-field">
            <input onBlur={handleNameChange} type="text" required />
            <span></span>
            <label htmlFor="">
              <i className="fas fa-user-alt"></i> Username
            </label>
          </div>
          <div className="form-field">
            <input onBlur={handleEmailChange} type="email" required />
            <span></span>
            <label htmlFor="">
              <i className="fas fa-envelope"></i> Email
            </label>
          </div>
          <div className="form-field">
            <input onBlur={handlePasswordChange} type="password" required />
            <span></span>
            <label htmlFor="">
              <i className="fas fa-unlock"></i> Password
            </label>
          </div>
          <p className="text-danger">{error}</p>
          <div className="pass">Forget Password?</div>
          <input type="submit" value="Register" />
          <div className="signup_link">
            Already a member? <Link to="/login">Sign In</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
