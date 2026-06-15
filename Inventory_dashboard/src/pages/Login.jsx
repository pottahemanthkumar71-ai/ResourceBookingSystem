import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const login = async () => {

    try {

      const res = await API.post(
        "/auth/login",
        user
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      setMessage("Login Successful 🎉");
      setShowAlert(true);

      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);

    } catch (err) {

      console.log(err);

      setMessage(
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Login Failed"
      );

      setShowAlert(true);
    }
  };

  return (
    <div className="login-container">

      <h2>Login</h2>

      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={user.password}
        onChange={handleChange}
      />

     <button onClick={login}>
  Login
</button>



<p className="auth-link">
  Don't have an account?
  <Link to="/signup"> Sign Up</Link>
</p>

<p className="auth-link">
  Admin?
  <Link to="/admin-login"> Admin Login</Link>
</p>
      {showAlert && (
        <div className="custom-alert-overlay">

          <div className="custom-alert">

            <div className="alert-icon">
              {message.includes("Successful")
                ? "✅"
                : "⚠️"}
            </div>

            <h3>Notification</h3>

            <p>{message}</p>

            <button
              onClick={() => setShowAlert(false)}
            >
              OK
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Login;