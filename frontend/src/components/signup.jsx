import React from "react";
import style from "./signup.module.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
export const Signup = () => {
   const navigate = useNavigate();
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
  });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  var handleValidation = () => {
    const { password, username } = state;

    if (username.length < 4) {
      toast.warning(
        "Username should be greater than 4 character",
        toastOptions
      );
      return false;
    } else if (password.length < 6) {
      toast.warning(
        "Password should be greater than 6 character",
        toastOptions
      );
      return false;
    }
    return true;
  };
  useEffect(()=>{
      if(localStorage.getItem("user")){
  navigate("/")
      }},[])
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (handleValidation()) {
      const { password, email, username } = state;

      const { data } = await axios.post("http://localhost:8000/api/signup", {
        password,
        email,
        username,
      });
      if (data.status === false) {
        toast.error(data.message, toastOptions);
      }
      if (data.status === true) {
        setstate({ username: "", email: "", password: "" });
        toast.success("Account successfully created", toastOptions);
       
      }
    }
  };
  return (
    <>
      <div className={style.main}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={style.brand}>
            <img src={logo} className={style.logo}></img>
            <h1> Second Brain</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            value={state.username}
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            value={state.email}
            onChange={(e) => handleChange(e)}
          ></input>
          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={state.password}
            onChange={(e) => handleChange(e)}
          ></input>
          <button type="submit">Signup</button>
          <span>
            Already have an account ?<NavLink to="/login"> Login</NavLink>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
