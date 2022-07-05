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
        <p style={{ color: "red" }}>
          {localStorage.getItem("Email") === email
            ? ""
            : "Please Enter Correct E-mail "}
        </p>
        <input
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handlePasswordInputChange}
        />
        <p style={{ color: "red" }}>
          {localStorage.getItem("Password") === password
            ? ""
            : "Please Enter Correct Password"}
        </p>
        <button className="form-field" type="submit">
          Signin
        </button>
      </form>
    </div>
  );
}

export default Signin;
