import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginHandler = () => {
    axios
      .post("http://localhost:3000/advertiser/login", {
        PersonalEmail: Email,
        Password: password
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={Email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="button" onClick={LoginHandler}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
