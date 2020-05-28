import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import axiosWithAuth from "../utils/axiosWithAuth";

import { UserContext } from "../context/UserContext";

import styled from "styled-components";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const { push } = useHistory();

  const handleChanges = (input) => {
    setUser({ ...user, [input.target.name]: input.target.value });
    console.log("User:", user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("new", user);
    axiosWithAuth()
      .post(`api/accounts/login`, user)
      .then((res) => {
        console.log("token:", res.data.token);
        console.log("Submitted Credentials", user);
        localStorage.setItem("token", res.data.token);
        push("/dashboard");
      })
      .catch((err) => console.log({ err }));
  };

  return (
    <LoginBox>
      <h3>Login</h3>
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
        <label htmlFor="newUser" className="newUserLabel">
          New user?
        </label>
        <Link to="/register" className="linkToRegister">
          Register
        </Link>
        <br />
      </form>
    </LoginBox>
  );
};
const LoginBox = styled.div`
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
      letter-spacing: 0.2rem;

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

export default Login;
