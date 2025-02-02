import React from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineBulb } from "react-icons/ai";
import { RiLinksFill } from "react-icons/ri";
import { CiCircleQuestion } from "react-icons/ci";
import { useState, useEffect } from "react";
import { HiFire } from "react-icons/hi";
import style from "./sidebar.module.css";
import { NavLink } from "react-router-dom";
export default function Sidebar({isactivate2}) {
  const [isactivate, setactivate] = useState(isactivate2);
  const handleClick2 = (e) => {
    setactivate(isactivate2);
    console.log(isactivate2);
  };
  return (
    <>
      <div className={style.main}>
        <h3>Second Brain</h3>

        <NavLink to="/">
          <div
            className={`${style.home} ${
              isactivate == "home" ? style.activate : ""
            }  ${style.symbol}`}
            onClick={() => handleClick2("home")}
          >
            <FaHome style={{ color: "white" ,marginTop:"14px"}} />
            <p>Home</p>
          </div>
        </NavLink>

        <NavLink to="/questions">
          <div
            className={`${style.question} ${
              isactivate == "questions" ? style.activate : ""
            }  ${style.symbol}`}
            onClick={() => handleClick2("questions")}
          >
            <CiCircleQuestion style={{ color: "white" ,marginTop:"14px"}} />
            <p>question</p>
          </div>
        </NavLink>

        <NavLink to="/ideas">
          <div
            className={`${style.ideas} ${
              isactivate == "ideas" ? style.activate : ""
            }  ${style.symbol}`}
            onClick={() => handleClick2("ideas")}
          >
            <AiOutlineBulb style={{ color: "white" ,marginTop:"14px"}} />
            <p>ideas</p>
          </div>
        </NavLink>

        <NavLink to="/links">
          <div
            className={`${style.links} ${
              isactivate == "links" ? style.activate : ""
            }  ${style.symbol}`}
            onClick={() => handleClick2("links")}
          >
            <RiLinksFill style={{ color: "white",marginTop:"14px" }} />
            <p>links</p>
          </div>
        </NavLink>

        <NavLink to="/creativity">
          <div
            className={`${style.creativity} ${
              isactivate == "creativity" ? style.activate : ""
            }  ${style.symbol}`}
            onClick={() => handleClick2("creativity")}
          >
            <HiFire style={{ color: "white",marginTop:"14px" }} />
            <p>creativity</p>
          </div>
        </NavLink>
      </div>
    </>
  );
}
