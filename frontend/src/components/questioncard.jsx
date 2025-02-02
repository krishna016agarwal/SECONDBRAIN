import React from "react";
import style from "./questionCard.module.css";

export default function QuestionCard({ title, question, onDelete }) {
  return (
    <div className={style.card}>
      <div className={style.head}>
        <div className={style.title}>{title}</div>
        <p>{question}</p>
      </div>
      <div className={style.foot}>
        <button className={style.share}>Share</button>
        <button className={style.delete} onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}
