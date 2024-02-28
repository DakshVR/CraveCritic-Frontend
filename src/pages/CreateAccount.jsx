import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Spinner from "../components/Spinner";
import "../components/CreateAccount.css";

export function CreateAccount() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: (newUser) =>
      fetch("http://localhost:8000/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      }).then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create user");
        }
        return response.json();
      }),
    onSuccess: (data) => {
      console.log("User created successfully:", data);
      // Handle success
    },
    onError: (error) => {
      console.error("Error creating user:", error.message);
      // Handle error
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && email && password) {
      console.log("Form Data:", { name, email, password });
      mutation.mutate({ name, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-wrapper">
        <div className="form-screen">
          <div className="form-title">
            <h1>Welcome</h1>
          </div>

          <div className="form-content">
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="buttonContainer">
              <button type="submit" className="form-button">
                Submit
              </button>
              <NavLink className="login-link" to="/">
                Log In
              </NavLink>
              {mutation.isPending && <Spinner />}
              {mutation.isSuccess && <span>Account successfully created!</span>}
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
