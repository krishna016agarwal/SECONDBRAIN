import React from "react";
import style from "./signup.module.css";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { LuBrain } from "react-icons/lu";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
export const Login = () => {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    username: "",
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

    if (username.length <3) {
      toast.warning(
        "Username / Email should be more than 3 character",
        toastOptions
      );
      return false;
    } 
    return true;
  };
//   useEffect(()=>{
//     if(localStorage.getItem("user")){
// navigate("/")
//     }
//   },[])
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (handleValidation()) {
      const { password, username } = state;

      const { data } = await axios.post("http://localhost:8000/api/login", {
        password,

        username,
      });
      if (data.status === false) {
        toast.error(data.message, toastOptions);
      }
      if (data.status === true) {
        setstate({ username: "", password: "" });
        toast.success("Logged-in successfully ", toastOptions);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/")
      }
    }
  };
  return (
    <>
      <div className={style.main}>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className={style.brand}>
          <LuBrain style={{ color: "rgb(168 85 247 )" ,width:"100px", height:"50px"}}/>
            <h1>Second Brain</h1>
             <p style={{color:"rgb(156 163 175)"}}>Sign in to access your Second Brain</p>
          </div>
          <input
            type="text"
            placeholder="Username / Email"
            name="username"
            required
            value={state.username}
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
          <button type="submit">Login</button>
          <span>
            Don't have an account ?<NavLink to="/signup"> Signup</NavLink>
          </span>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
