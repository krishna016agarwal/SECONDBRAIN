import React from "react";
import style from "./home.module.css";
import { useState, useEffect } from "react";
import Sidebar from "./sidebar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
export default function Home() {
  const [isactivate, setactivate] = useState("browse");
  const [isactivate2, setactivate2] = useState("question");
  const [isactivate3, setactivate3] = useState("all");

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };
  const handleClick = (e) => {
    setactivate(e);
  };
  const handleClick2 = (e) => {
    setactivate2(e);
  };
  const handleClick3 = (e) => {
    setactivate3(e);
    
    
  };
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
            useEffect(()=>{
      if(localStorage.getItem("user")){
  toast.success(
        "Login Successfully",
        toastOptions
      );
      }},[])
  return (
    <>
      <div className={style.container}>
        <div className={style.main}>
          <h1>Welcome to Your Second Brain</h1>
          <h2>Organize your thoughts, ideas, and links in one place.</h2>
          <div className={style.section}>
            <div
              className={`${style.browse} ${
                isactivate == "browse" ? style.activate : ""
              }  ${style.sec}`}
              onClick={() => handleClick("browse")}
            >
              Browse Items
            </div>
            <div
              className={`${style.item} ${
                isactivate == "item" ? style.activate : ""
              }  ${style.sec}`}
              onClick={() => handleClick("item")}
            >
              Add New Item
            </div>
            <div
              className={`${style.links} ${
                isactivate == "links" ? style.activate : ""
              } ${style.sec}`}
              onClick={() => handleClick("links")}
            >
              Manage Links
            </div>
          </div>
          {isactivate == "item" ? <div>
            <div className={style.body}>
              <div
                className={`${style.browse} ${
                  isactivate2 == "question" ? style.activate : ""
                }  ${style.sec2}`}
                onClick={() => handleClick2("question")}
              >
                Question
              </div>
              <div
                className={`${style.item} ${
                  isactivate2 == "thought" ? style.activate : ""
                }  ${style.sec2}`}
                onClick={() => handleClick2("thought")}
              >
                Thought
              </div>
              <div
                className={`${style.links} ${
                  isactivate2 == "creativty" ? style.activate : ""
                } ${style.sec2}`}
                onClick={() => handleClick2("creativty")}
              >
                Creativity
              </div>
              <div
                className={`${style.links} ${
                  isactivate2 == "ideas" ? style.activate : ""
                } ${style.sec2}`}
                onClick={() => handleClick2("ideas")}
              >
                Ideas
              </div>
            </div>
            <div className={style.main21}>
                     
                       <form onSubmit={(event)=>handleSubmit(event)}>
                       <input
                           type="text"
                           placeholder={`Enter ${isactivate2} title`}
                           name="title"
                           required
                           value={state.username}
                           onChange={(e) => handleChange(e)}
                         ></input>
                          <input
                          className={style.content21}
                           type="text"
                           placeholder={`Enter ${isactivate2} content`}
                           name="ideas"
                           required
                           value={state.username}
                           onChange={(e) => handleChange(e)}
                         ></input>
                          <button type="submit">{`Add ${isactivate2}`}</button>
                       </form>
                   </div>
            </div>
           : (
            ""
          )}
          {isactivate == "links" ? (
            <div className={style.container}>
              <div className={style.head}>
                <div className={style.title}>{/* {title} */}</div>
                <h5>question</h5>
              </div>
              <div className={style.body2}>{/* {question} */}</div>
              <div className={style.foot}>
                <button className={style.share}>Share</button>
                <button className={style.delete}>Delete</button>
              </div>
            </div>
          ) : (
            ""
          )}
          {isactivate == "browse" ? (
            <div className={style.search}>
              <input placeholder="Search Items..."></input>
              <div className={style.box}>
                <div
                  className={`${style.card} ${
                    isactivate3 == "all" ? style.activate3 : ""
                  } `}
                  onClick={() => handleClick3("all")}
                >
                  All
                </div>
                <div
                  className={`${style.card} ${
                    isactivate3 == "questions" ? style.activate3 : ""
                  } `}
                  onClick={() => handleClick3("questions")}
                >
                  Questions
                </div>
                <div
                  className={`${style.card} ${
                    isactivate3 == "ideas" ? style.activate3 : ""
                  } `}
                  onClick={() => handleClick3("ideas")}
                >
                  Ideas
                </div>
                <div
                  className={`${style.card} ${
                    isactivate3 == "links" ? style.activate3 : ""
                  } `}
                  onClick={() => handleClick3("links")}
                >
                  Links
                </div>
                <div
                  className={`${style.card} ${
                    isactivate3 == "creativity" ? style.activate3 : ""
                  } `}
                  onClick={() => handleClick3("creativity")}
                >
                  Creativity
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <Sidebar isactivate2={"home"}></Sidebar>
        <ToastContainer />
      </div>
    </>
  );
}
