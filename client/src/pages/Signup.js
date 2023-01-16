import React, { useState } from "react";
import { Link } from "react-router-dom";
import { fromPromise, useMutation } from "@apollo/client";
import Auth from "../utils/auth";
// import {ADD_USER} from '../utils/mutations'

function SignUp(props) {
  const [formState, setFormState] = useState({ userName: "", password: "" });
  // const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const mutationResponse = await AudioScheduledSourceNode({
      variables: {
        email: formState,
        userName: formState.userName,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
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
    <div>
      <Link to="/signup">Click here to sign up!</Link>
      <h1>SignUp</h1>
      <form onSubmit={{ handleFormSubmit }}>
        <div>
          <label htmlFor="userName">Username:</label>
          <input
            placeholder="username.."
            name="userName"
            type="userName"
            id="userName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            placeholder="First"
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            placeholder="youremail@test.com"
            name="email"
            type="email"
            id="email"
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
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
