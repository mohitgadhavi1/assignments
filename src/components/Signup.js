import React, { useState } from "react";
import "./Signup.css";

function Signup({ setLogin }) {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    number: "",
    proffesion: "web",
  });
  const options = [
    { label: "Web Developer", value: "web" },
    { label: "Mobile Developer", value: "mobile" },
    { label: "Cloud Developer", value: "cloud" },
  ];
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleFirstNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      firstName: event.target.value,
    }));
  };
  const handleLastNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      lastName: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  const handlePasswordInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };
  const handleNumberInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      number: event.target.value,
    }));
  };
  const handleProffesionInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      proffesion: event.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      values.firstName &&
      values.lastName &&
      values.email &&
      values.number &&
      values.password &&
      values.proffesion
    ) {
      setValid(true);
      setLogin(true);
      localStorage.setItem("Email", values.email);
      localStorage.setItem("Password", values.password);
      localStorage.setItem("FirstName", values.firstName);
      localStorage.setItem("LastName", values.lastName);
      localStorage.setItem("MobileNumber", values.number);
      localStorage.setItem("Proffesion", values.proffesion);
    }
    setSubmitted(true);
  };
  return (
    <div className="form-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          id="first-name"
          className="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleFirstNameInputChange}
        />
        {submitted && !values.firstName && (
          <span id="first-name-error">Please enter a first name</span>
        )}
        <input
          id="last-name"
          className="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleLastNameInputChange}
        />

        {submitted && !values.lastName && (
          <span id="last-name-error">Please enter a last name</span>
        )}
        <input
          id="email"
          className="form-field"
          type="text"
          placeholder="Email"
          name="email"
          value={values.email}
          onChange={handleEmailInputChange}
        />
        {submitted && !values.email && (
          <span id="email-error">Please enter an email address</span>
        )}
        <input
          id="password"
          className="form-field"
          type="password"
          placeholder="Password"
          name="password"
          value={values.password}
          onChange={handlePasswordInputChange}
        />
        {submitted && !values.password && (
          <span id="password-error">Please enter valid password</span>
        )}
        <input
          id="number"
          className="form-field"
          type="number"
          placeholder="Mobile Number"
          name="number"
          value={values.number}
          onChange={handleNumberInputChange}
        />
        {submitted && !values.number && (
          <span id="number-error">Please enter your mobile number</span>
        )}
        <label>
          Your Proffesion?
          <select
            value={values.proffesion}
            onChange={handleProffesionInputChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Signup;
