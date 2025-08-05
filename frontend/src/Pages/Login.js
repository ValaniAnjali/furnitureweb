import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful, redirect to home page
        navigate("/home");
      } else {
        // Login failed, display error message
        if (response.status === 401) {
          setError("Incorrect email or password.");
        } else {
          setError(data.message || "User name or password is incorrect.");
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div>
        <h1>Login Here For Continue visiting pages</h1>
      </div>
      <div className="container-fluid h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-6">
            <form
              onSubmit={handleSubmit}
              className="my-form bg-light p-4 rounded"
            >
              <h2 className="mb-4">Login</h2>
              <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-label="Email address"
                  placeholder="Enter email"
                  name="email"
                  value={credentials.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  aria-label="Password"
                  placeholder="Password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-lg btn-block w-100"
                >
                  Login
                </button>
              </div>

              {error && <div className="alert alert-danger mt-3">{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
