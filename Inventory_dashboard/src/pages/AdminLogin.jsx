import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const login = () => {

    if(
      email === "admin@klu.com" &&
      password === "admin123"
    ){

      localStorage.setItem("admin","true");

      navigate("/admin");

    }else{

      alert("Invalid Admin Credentials");

    }
  };

  return (
    <div className="login-container">

      <h2>Admin Login</h2>

      <input
        type="email"
        placeholder="Admin Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={login}>
        Login
      </button>

    </div>
  );
}

export default AdminLogin;