import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fromPromise, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
import "../styles/Login.css";
import { ADD_USER } from "../utils/mutations";

function SignUp(props) {
  const [formState, setFormState] = useState({
    userName: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const mutationResponse = await AudioScheduledSourceNode({
      variables: {
        userName: formState.userName,
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div className="loginFormBox">
      <Link className="signupBTN" to="/signup">
        Click here to sign up!
      </Link>
      <h1>SignUp</h1>
      <form onSubmit={{ handleFormSubmit }}>
        <div>
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
        </div>
        <div>
          <label className="loginLabel" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="loginStyle"
            placeholder="First Name"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="loginLabel" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="loginStyle"
            placeholder="Last Name"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="loginLabel" htmlFor="email">
            Email:
          </label>
          <input
            className="loginStyle"
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
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
        </div>
        <div>
          <button className="loginSubmit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
