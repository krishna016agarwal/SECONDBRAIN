import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import style from "./questionCard.module.css";
import { GoShareAndroid } from "react-icons/go";
export default function QuestionCard({ title, question, onDelete }) {
  return (
    <div className={style.card}>
      <div className={style.head}>
        <div className={style.title}>{title}</div>
        <p>{question}</p>
      </div>
      <div className={style.foot}>
       
       

        <div className={style.sharebox}>
        <GoShareAndroid />
        <button className={style.share}>Share</button>
        </div>


        <div className={style.deletebox}>
        <RiDeleteBin6Line />
        <button className={style.delete} onClick={onDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
