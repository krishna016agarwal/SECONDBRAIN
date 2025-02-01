import React from "react";
import { FaHome } from "react-icons/fa";
import { AiOutlineBulb } from "react-icons/ai";
import { RiLinksFill } from "react-icons/ri";
import { CiCircleQuestion } from "react-icons/ci";

import { HiFire } from "react-icons/hi";
import style from "./sidebar.module.css";
export default function Sidebar() {
  return (
    <>
      <div className={style.main}>
        <h3>Second Brain</h3>
        <div className={style.home || style.symbol}>
          <FaHome style={{ color: "white" }} />
          <p>Home</p>
        </div>
        <div className={style.question || style.symbol}>
       
        <CiCircleQuestion style={{ color: "white" }} />
            <p>Question</p>
        </div>
        <div className={style.ideas || style.symbol}>
        <AiOutlineBulb style={{ color: "white" }} />
            <p>Ideas</p>
        </div>
        <div className={style.links || style.symbol}>
      
        <RiLinksFill style={{ color: "white" }} />
            <p>Links</p>
        </div>
        <div className={style.creativity || style.symbol}>
      
        <HiFire style={{ color: "white" }} />
            <p>Creativity</p>
        </div>
      </div>
    </>
  );
}
