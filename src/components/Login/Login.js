import google from "../../image/logo/google.png";
import facebook from "../../image/logo/facebook.png";
import github from "../../image/logo/github.png";
import "./Login.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const {
    processLogin,
    signInUsingGoogle,
    signInUsingGithub,
    handleEmailChange,
    handlePasswordChange,
    handleResetPassword,
    error,
  } = useAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    processLogin();
  };
  return (
    <div>
      <div className="center">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
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
          <div className="pass" onClick={handleResetPassword}>
            Forget Password?
          </div>
          <input type="submit" value="Login" />

          <div className="signup_link">
            Not a member? <Link to="/register">Sign Up</Link>
          </div>
          <div>
            <h5 className="text-center">Sign in with Social media</h5>
            <button onClick={signInUsingGoogle}>
              <img className="iconImg" src={google} alt="" />
            </button>
            <button>
              <img className="iconImg" src={facebook} alt="" />
            </button>
            <button onClick={signInUsingGithub}>
              <img className="iconImg" src={github} alt="" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
