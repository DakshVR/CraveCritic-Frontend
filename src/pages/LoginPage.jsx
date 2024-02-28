// Login.jsx
import { Link, NavLink } from "react-router-dom";
import "../components/Loginpage.css";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Spinner from "../components/Spinner";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: async (loginInfo) => {
      try {
        const response = await fetch("http://localhost:8000/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginInfo),
        });

        if (!response.ok) {
          throw new Error("Failed to login"); // Throw an error for non-200 responses
        }

        return response.json();
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log("Logged In successfully:", data);
      // Handle success
    },
    onError: (error) => {
      console.error("Failed Authentication:", error.message);
      // Access error response from backend if available
      if (error.response) {
        error.response.json().then((data) => {
          console.error("Backend Error:", data.error); // Log the error from the backend
        });
      }
      // Handle error
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      console.log("Data: ", { email, password });
      mutation.mutate({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="login">
          <div className="login-screen">
            <div className="app-title">
              <h1>Welcome</h1>
            </div>

            <div className="login-form">
              <div className="control-group">
                <input
                  className="input-styles"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="login-name"
                />
              </div>

              <div className="control-group">
                <input
                  className="input-styles"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  id="login-pass"
                />
              </div>

              <button className="button">Login</button>
              <NavLink className="login-link" to="/newuser">
                Create Account
              </NavLink>
              {mutation.isPending && <Spinner />}
              {mutation.isSuccess && <span>Login successfull!</span>}
              {mutation.isError && (
                <span>An error occurred: {mutation.error.message}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
