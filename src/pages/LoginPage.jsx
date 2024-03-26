import { Link, NavLink } from "react-router-dom";
import "../components/Loginpage.css";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query"; // Import useMutation hook
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/store";
import Spinner from "../components/Spinner";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const mutation = useMutation({
    mutationFn: async (loginInfo) => {
      try {
        const response = await fetch("http://localhost:8000/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(loginInfo),
        });

        if (!response.ok) {
          throw new Error("Failed to login");
        }

        return response.json();
      } catch (error) {
        throw error;
      }
    },
    onSuccess: (data) => {
      console.log("Logged In successfully:", data.token, data.user);
      dispatch(loginSuccess(data.token, data.user));
    },
    onError: (error) => {
      console.error("Failed Authentication:", error.message);
      if (error.response) {
        error.response.json().then((data) => {
          console.error("Backend Error:", data.error);
        });
      }
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      // console.log("Data: ", { email, password });
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
