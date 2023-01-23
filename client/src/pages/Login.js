import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import "../styles/Login.css";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const mutationResponse = await login({
        variables: {
          userName: formState.userName,
          password: formState.password,
        },
      });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { userName, value } = e.target;
    setFormState({
      ...formState,
      [userName]: value,
    });
  };

  return (
    <div className="loginFormBox">
      <Link className="signupBTN" to="/signup">
        Click here to sign up!
      </Link>
      <h1 className="loginHeader">Login</h1>
      <div className="loginFormBox">
        <form onSubmit={{ handleFormSubmit }}>
          <label className="loginLabel" htmlFor="userName">
            Username:
          </label>
          <input
            className="loginStyle"
            placeholder="username.."
            name="userName"
            type="userName"
            id="userName"
            onChange={handleChange}
          />
          <label className="loginLabel" htmlFor="pwd">
            Password:
          </label>
          <input
            className="loginStyle"
            placeholder="********"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
          {error ? (
            <div>
              <p className="errorMsg">Incorrect username or password!</p>
            </div>
          ) : null}
          <button className="loginSubmit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
