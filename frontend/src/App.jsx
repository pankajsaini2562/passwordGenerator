import React from "react";
import { useState } from "react";
import validator from "validator";
export default function App() {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is Strong Password");
    } else {
      setErrorMessage("Is Not Strong Password");
    }
  };

  return (
    <div>
      <h1>Checking Password Strength in reactjs</h1>
      <span>Enter password:</span>
      <input type="text" onChange={(e) => validate(e.target.value)}></input>
      <br />
      {errorMessage == "" ? null : (
        <span style={{ color: "red", fontWeigh: "bold" }}>{errorMessage}</span>
      )}
    </div>
  );
}
