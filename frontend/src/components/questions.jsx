import React from "react";
import style from "./question.module.css";
import { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "./sidebar";
export default function Questions() {
  const arr = [];
  const [state, setstate] = useState({
    title: "",
    question: "",
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
  const handleSubmit = async (event) => {
    event.preventDefault();

    const { title, question } = state;
    arr.push({ title, question });
    console.log(arr);

    setstate({ title: "", question: "" });
    // const { data } = await axios.post("http://localhost:8000/api/question", {
    // title,question
    // });
    // if (data.status === false) {
    //   toast.error(data.message, toastOptions);
    // }
    // if (data.status === true) {
    //   setstate({ title: "", question: ""});
    //   toast.success("Question is successfully added", toastOptions);

    // }
    toast.success("Question is successfully added", toastOptions);
  };
  return (
    <>
      <div className={style.container2}>
        <div className={style.main}>
          <h1>Questions</h1>
          <form onSubmit={(event) => handleSubmit(event)}>
            <input
              type="text"
              placeholder="Add Question Title"
              name="title"
              required
              value={state.title}
              onChange={(e) => handleChange(e)}
            ></input>
            <input
              type="text"
              placeholder="Enter Question Content"
              name="question"
              required
              value={state.question}
              onChange={(e) => handleChange(e)}
            ></input>
            <button type="submit">Add Question</button>
          </form>
          <ToastContainer />
          <div className={style.container}>
            <div className={style.head}>
              <div className={style.title}>{/* {title} */}</div>
              <h5>question</h5>
            </div>
            <div className={style.body}>{/* {question} */}</div>
            <div className={style.foot}>
              <button className={style.share}>Share</button>
              <button className={style.delete}>Delete</button>
            </div>
          </div>
        </div>
        <Sidebar></Sidebar>
      </div>
    </>
  );
}
