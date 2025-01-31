import React from 'react'
import style from "./question.module.css";
import { useState,useEffect } from 'react';
export default function Creativity() {
     const [state, setstate] = useState({
            title:"",
            creativity:"",
          });
          const handleChange = (e) => {
            setstate({ ...state, [e.target.name]: e.target.value });
          };
          const handleSubmit = async (event) => {
            event.preventDefault();
        
        
              const { data } = await axios.post("http://localhost:8000/api/crcreativity", {
              title,question
              });
              if (data.status === false) {
                toast.error(data.message, toastOptions);
              }
              if (data.status === true) {
                setstate({ title: "", question: ""});
                toast.success("Question is successfully added", toastOptions);
               
              }
            
          };
  return (
   <>
      <div className={style.main}>
          <h1>Creativity</h1>
          <form onSubmit={(event)=>handleSubmit(event)}>
          <input
              type="text"
              placeholder="Add Question Title"
              name="title"
              required
              value={state.username}
              onChange={(e) => handleChange(e)}
            ></input>
             <input
              type="text"
              placeholder="Enter creativity Content"
              name="creativity"
              required
              value={state.username}
              onChange={(e) => handleChange(e)}
            ></input>
             <button type="submit">Add creativity</button>
          </form>
      </div>
      </>
  )
}
