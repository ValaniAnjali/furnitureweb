import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "", cpassword: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { name, email, password, cpassword } = user;

    // Check if any field is empty
    if (!name || !email || !password || !cpassword) {
      window.alert("All fields are compulsory.");
      return;
    }

    // Check if password and confirm password match
    if (password !== cpassword) {
      window.alert("Password and confirm password do not match.");
      return;
    }

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        name, email, password, cpassword
      })
    });

    const data = await res.json();

    if (res.ok) {
      window.alert("Successfully registered.");
      navigate('/login');
    } else {
      window.alert(data.alert || "User already exists. Please use a different email.");
    }
  };

  return (
    <>
        <section className="vh-100  align-items-center justify-content-center" style={{ marginTop: "150px" }}>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="custom-card shadow">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Sign up</h2>
                <form id="signup-form" method="POST">
                  <div className="mb-3">
                    <input type="text"
                      value={user.name}
                      onChange={handleInput}
                      name='name'
                      className="form-control"
                      placeholder="Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input type="email"
                      value={user.email}
                      onChange={handleInput}
                      name='email'
                      className="form-control"
                      placeholder="Email"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input type="password"
                      value={user.password}
                      onChange={handleInput}
                      name='password'
                      className="form-control"
                      placeholder="Password"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input type="password"
                      placeholder='Confirm Password'
                      value={user.cpassword}
                      onChange={handleInput}
                      name='cpassword'
                      className="form-control"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="d-grid">
                    <button type="button" className="btn btn-primary btn-lg btn-block" onClick={PostData}>Register</button>
                  </div>
                </form>
                <p className="mt-3 mb-0 text-center">Already have an account? <button className="btn btn-link" onClick={() => navigate('/login')}>Login</button></p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Signup;
