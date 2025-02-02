import React from 'react'
import style from "./question.module.css";
import { useState,useEffect } from 'react';
import Sidebar from './sidebar';
export default function Ideas() {
     const [state, setstate] = useState({
            title:"",
            ideas:"",
          });
          const handleChange = (e) => {
            setstate({ ...state, [e.target.name]: e.target.value });
          };
          const handleSubmit = async (event) => {
            event.preventDefault();
        
        
              const { data } = await axios.post("http://localhost:8000/api/ideas", {
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
      
        <div className={style.container2}>
        <div className={style.main}>
           <h1>Ideas</h1>
           <form onSubmit={(event)=>handleSubmit(event)}>
           <input
               type="text"
               placeholder="Add idea Title"
               name="title"
               required
               value={state.username}
               onChange={(e) => handleChange(e)}
             ></input>
              <input
               type="text"
               placeholder="Enter idea Content"
               name="ideas"
               required
               value={state.username}
               onChange={(e) => handleChange(e)}
             ></input>
              <button type="submit">Add idea</button>
           </form>
       </div>
       <Sidebar isactivate2={"ideas"}></Sidebar>
        </div>
       </>
  )
}
