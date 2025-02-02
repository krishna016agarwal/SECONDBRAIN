import React, { useState } from "react";
import style from "./question.module.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Sidebar from "./sidebar";
import QuestionCard from "./questioncard"; // Import the new component
import { useDataContext } from "./context";
export default function Questions() {

//------------------------------
const {addToHome} =useDataContext();

const { data } = useDataContext();

//-------------------

  const [questions, setQuestions] = useState([]);
  const [state, setState] = useState({ title: "", question: "" });

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, question } = state;
    addToHome({title, question })
    if (title.trim() && question.trim()) {
      setQuestions([...questions, { title, question }]);
      setState({ title: "", question: "" });
      toast.success("Question successfully added", toastOptions);
    } else {
      toast.error("Both fields are required", toastOptions);
    }
  };

  const handleDelete = (index) => {
    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <>
      <div className={style.container2}>
        <div className={style.main}>
          <h1>Questions</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Add Question Title"
              name="title"
              required
              value={state.title}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter Question Content"
              name="question"
              required
              value={state.question}
              onChange={handleChange}
            />
            <button type="submit">Add Question</button>
          </form>
          <ToastContainer />

          {/* Scrollable Questions List */}
          <div className={style.scrollContainer}>
            {data.map((q, index) => (
              <QuestionCard
                key={index}
                title={q.title}
                question={q.question}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
}