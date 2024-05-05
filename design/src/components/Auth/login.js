import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import './login.css';

const Login = () => {
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
  
    try {
      const response = await fetch("http://localhost:8080/api/login", 
      {
        method: "POST",
        body: JSON.stringify({
          username: formData.get("text"),
          password: formData.get("password")
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      if (response.ok) {
        const data = await response.json(); // Parse the JSON string into an object
     
        if(data.role==="manager"){
          console.log("manager33");
          navigate(`/manager/${data.id}`);

        }
        console.log("ardisa");
        console.log(data.role);
      } 
       else {
        setError("Error logging in. Please try again.");
      }
    } catch (error) {
      setError("Error logging in. Please try again.");
    }
  }
  





  return (
    <main className="sign-in-form">
      <form onSubmit={handleLogin}>
        {/* Your login form */}
        <div className="input-group">
          <label htmlFor="email" className="input-label">Username</label>
          <input type="text" id="text" name="text" className="input-field" placeholder="Enter username:D" />
          {/* Add name attribute to access value via FormData */}
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/755bab22a4913bff9991cc063d279a47bc0c858f96e8161b37925f6e1fc03a1c?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&" className="input-icon" alt="" />
        </div>
        <div className="input-group">
          <label htmlFor="password" className="input-label">Password</label>
          <input type="password" id="password" name="password" className="input-field" placeholder="••••••••" />
          {/* Add name attribute to access value via FormData */}
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58bdacce181e4e72b98cbff0e8ed43606d70f16ced8ca417781a393821921fa8?apiKey=15159d1f3bfe4fe7a8efb0b9cf40f3e0&" className="input-icon" alt="" />
        </div>
        <div className="forgot-password">Recover Password ?</div>
        <button type="submit" className="sign-in-button">Login</button>
      </form>
      {error && <div className="error">{error}</div>}
    </main>
  );
}

export default Login;
