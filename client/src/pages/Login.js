import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { Link } from "react-router-dom";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";

function Login(props) {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const mutationResponse = await login({
        variables: { userName: formState.userName, password: formState.password },
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
    <div>
      <Link to="/signup">Click here to sign up!</Link>
      <h1>Login</h1>
      <form onSubmit={{ handleFormSubmit }}>
        <div>
          <label htmlFor="userName">Email address:</label>
          <input
            placeholder="username.."
            name="userName"
            type="userName"
            id="userName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="pwd">Password:</label>
          <input
            placeholder="********"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        {error ? (
          <div>
            <p className="errorMsg">Incorrect username or password!</p>
          </div>
        ) : null}
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
