import Navbar from '../../Navbar';
import './Login.css';

function Login() {
  return (
    <>
      <Navbar/>
      <div className="login-container">
        <form>
          <h2 className="login-header">Login</h2>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
          </div>
          <div className="form-group">
            <button type="submit" className="login-button">Login</button>
          </div>
          <div className="login-links">
            <p className="signup-link">Don't have an account? <a href="Signup">Sign up</a></p>
            <p className="forgot-password-link"><a href="#">Forgot password?</a></p>
          </div>
        </form>
        <div className="image-container">
          <img src="https://cdn-icons-png.flaticon.com/512/5509/5509636.png" alt="Image" className="login-image" />
        </div>
      </div>
    </>
  );
}

export default Login;
