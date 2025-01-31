import React from 'react'
import style from "./link.module.css";
import { useState,useEffect } from 'react';
export default function Links() {
     const [state, setstate] = useState({
            title:"",
          
          });
          const handleChange = (e) => {
            setstate({ ...state, [e.target.name]: e.target.value });
          };
          const handleSubmit = async (event) => {
            event.preventDefault();
        
        
              const { data } = await axios.post("http://localhost:8000/api/links", {
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
            <h1>Links</h1>
           <div className={style.section}>
           <form onSubmit={(event)=>handleSubmit(event)}>
                <h2>Facebook</h2>
            <input
                type="text"
                placeholder="Add link Title"
                name="title"
                required
                value={state.username}
                onChange={(e) => handleChange(e)}
              ></input>
             
               <button type="submit">Save</button>
            </form>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <h2>Instagram</h2>
            <input
                type="text"
                placeholder="Add link Title"
                name="title"
                required
                value={state.username}
                onChange={(e) => handleChange(e)}
              ></input>
             
               <button type="submit">Save</button>
            </form>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <h2>LinkeIn</h2>
            <input
                type="text"
                placeholder="Add link Title"
                name="title"
                required
                value={state.username}
                onChange={(e) => handleChange(e)}
              ></input>
             
               <button type="submit">Save</button>
            </form>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <h2>Youtube</h2>
            <input
                type="text"
                placeholder="Add link Title"
                name="title"
                required
                value={state.username}
                onChange={(e) => handleChange(e)}
              ></input>
             
               <button type="submit">Save</button>
            </form>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <h2>Quora</h2>
            <input
                type="text"
                placeholder="Add link Title"
                name="title"
                required
                value={state.username}
                onChange={(e) => handleChange(e)}
              ></input>
             
               <button type="submit">Save</button>
            </form>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <h2>Reddit</h2>
            <input
                type="text"
                placeholder="Add link Title"
                name="title"
                required
                value={state.username}
                onChange={(e) => handleChange(e)}
              ></input>
             
               <button type="submit">Save</button>
            </form>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <h2>Telegram</h2>
            <input
                type="text"
                placeholder="Add link Title"
                name="title"
                required
                value={state.username}
                onChange={(e) => handleChange(e)}
              ></input>
             
               <button type="submit">Save</button>
            </form>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <h2>Pinterest</h2>
            <input
                type="text"
                placeholder="Add link Title"
                name="title"
                required
                value={state.username}
                onChange={(e) => handleChange(e)}
              ></input>
             
               <button type="submit">Save</button>
            </form>
            <form onSubmit={(event)=>handleSubmit(event)}>
                <h2>Other Websites</h2>
            <input
                type="text"
                placeholder="Add link Title"
                name="title"
                required
                value={state.username}
                onChange={(e) => handleChange(e)}
              ></input>
             
               <button type="submit">Save</button>
            </form>
           </div>

        </div>
        </>
  )
}
