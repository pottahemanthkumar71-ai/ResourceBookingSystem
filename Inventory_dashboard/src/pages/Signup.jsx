import { useState } from "react";
import API from "../api";
import { Link, useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const signup = async () => {

    try {

      await API.post(
        "/auth/signup",
        user
      );

      setMessage("Registration Successful 🎉");
      setShowAlert(true);

      setTimeout(() => {
        navigate("/");
      }, 1500);

    } catch (err) {

      console.log(err);

      setMessage(
        err.response?.data?.message ||
        err.response?.data ||
        err.message ||
        "Registration Failed"
      );

      setShowAlert(true);

    }
  };

  return (

    <div className="signup-container">

      <h2>Create Account</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value
          })
        }
      />

      <input
        type="email"
        placeholder="Enter Email"
        value={user.email}
        onChange={(e) =>
          setUser({
            ...user,
            email: e.target.value
          })
        }
      />

      <input
        type="password"
        placeholder="Enter Password"
        value={user.password}
        onChange={(e) =>
          setUser({
            ...user,
            password: e.target.value
          })
        }
      />

      <button onClick={signup}>
        Register
      </button>

      <p className="auth-link">
        Already have an account?
        <Link to="/"> Login</Link>
      </p>

      {showAlert && (

        <div className="custom-alert-overlay">

          <div className="custom-alert">

            <div className="alert-icon">
              {message.includes("Successful")
                ? "🎉"
                : "⚠️"}
            </div>

            <h3>Notification</h3>

            <p>{message}</p>

            <button
              onClick={() =>
                setShowAlert(false)
              }
            >
              OK
            </button>

          </div>

        </div>

      )}

    </div>

  );
}

export default Signup;