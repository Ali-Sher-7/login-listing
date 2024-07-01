// src/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [valid, setValid] = useState(true);
  const [errors, setErrors] = useState({});
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    let isvalid = true;
    let validationError = {};

    if (email === "" || email === null) {
      isvalid = false;
      validationError.email = "Enter Email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isvalid = false;
      validationError.email = "Email is not valid";
    }

    if (password === "" || password === null) {
      isvalid = false;
      validationError.password = "Enter Password";
    } else if (password.length < 6) {
      isvalid = false;
      validationError.password = "Password length must be 6";
    } else {
      navigate("listing");
    }
    setErrors(validationError);
    setValid(isvalid);
  };

  return (
    <>
      <section className="login">
        <div className="container-fluid w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="row w-25">
            <div className="col-md-12">
              <h3 className="text-center text-white">Login</h3>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username ">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {valid ? (
                    <></>
                  ) : (
                    <span className="text-danger">{errors.email}</span>
                  )}
                </div>

                <div className="form-group mt-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {valid ? (
                    <></>
                  ) : (
                    <span className="text-danger">{errors.password}</span>
                  )}
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn mt-4 w-50 text-white fs-5 rounded-pill"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
