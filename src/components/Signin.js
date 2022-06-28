import React, { useState } from "react";
import "./Signup.css";

function Signin({ setLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailInputChange = (event) => {
    event.persist();
    setEmail(event.target.value);
  };
  const handlePasswordInputChange = (event) => {
    event.persist();
    setPassword(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.getItem("Email") === email &&
    localStorage.getItem("Password") === password
      ? setLogin(true)
      : setLogin(false);
  };
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={handleEmailInputChange}
        />
        {/* {submitted && !email && (
          <span id="email-error">Please enter an email address</span>
        )} */}
        <input
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePasswordInputChange}
        />
        {/* {submitted && !password && (
          <span id="password-error">Please enter valid password</span>
        )} */}
        <button className="form-field" type="submit">
          Signin
        </button>
      </form>
    </div>
  );
}

export default Signin;
