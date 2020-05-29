import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import axiosWithAuth from "../utils/axiosWithAuth";

import styled from "styled-components";

const Register = () => {
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });

  const { push } = useHistory();

  const handleChanges = (input) => {
    setNewUser({ ...newUser, [input.target.name]: input.target.value });
    console.log("New User:", newUser);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("api/accounts/register", newUser)
      .then(console.log("Registration Successful", newUser));
    push("/");
  };

  return (
    <RegistrationBox>
      <h3>Register</h3>
      <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChanges}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChanges}
          required
        />
        <br />
        <input type="submit" className="submit" />
        <br />
        <label htmlFor="existingUser" className="existingUserLabel">
          Already have an account?
        </label>
        <Link to="/" className="linkToLogin">
          Login
        </Link>
        <br />
      </form>
    </RegistrationBox>
  );
};

const RegistrationBox = styled.div`
  color: #444444;
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    padding-bottom: 1rem;
    border-bottom: 1px dotted #444444;
    margin-bottom: 5%;
    text-align: center;
    @media (max-width: 400px) {
      font-size: 2rem;
    }
  }

  /* Registration form styling */
  form {
    padding: 2.5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    /* Input styling */
    input {
      margin: 0.5rem 0;
      width: 20rem;
      height: 3.5rem;
      background: #bfbfbf;
      border: none;
      border-radius: 0.3rem;
      padding: 0.5rem 0.5rem 0.5rem 1rem;
      font-size: 1.2rem;
      font-weight: 300;
      letter-spacing: 0.1rem;

      &:focus {
        outline: none;
        border: 1px solid #ababab;
      }
    }

    /* Button Styling */
    button {
      width: 20rem;
      height: 3.5rem;
      margin: 1rem 0;
      background: #d1ffd6;
      border: none;
      border-radius: 0.3rem;
      transition: all 100ms;
      box-shadow: 0px 2px 5px -5px;
      letter-spacing: 0.1rem;

      &:hover {
        transition: background 100ms;
        cursor: pointer;
        background: #afdeb4;
      }
    }
    /* Login if already registered */
    .extra-options {
      margin: 1rem 0;
      width: 80%;
      display: flex;
      justify-content: center;
      span {
        color: black;
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
`;

export default Register;
