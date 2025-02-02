import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoShareAndroid } from "react-icons/go";
import style from "./questionCard.module.css";

export default function QuestionCard({ title, question, onDelete }) {
  // Function to handle sharing
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: question,
          url: window.location.href, // You can replace this with a specific URL if needed
        });
        console.log("Shared successfully!");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported on this browser.");
    }
  };

  return (
    <div className={style.card}>
      <div className={style.head}>
        <div className={style.title}>{title}</div>
        <p>{question}</p>
      </div>
      <div className={style.foot}>
        <div className={style.sharebox}>
          <GoShareAndroid />
          <button className={style.share} onClick={handleShare}>
            Share
          </button>
        </div>

        <div className={style.deletebox}>
          <RiDeleteBin6Line />
          <button className={style.delete} onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
