import React from 'react'
import style from "./home.module.css";
import { useState,useEffect } from 'react';
import Sidebar from './sidebar';
export default function Home() {
  
  return (
    <>
   
           <div className={style.container}>
           <div className={style.main}>
               <h1>Welcome to Your Second Brain</h1>
               <h3>Organize your thoughts, ideas, and links in one place.</h3>
              
           </div>
           <Sidebar></Sidebar>
           </div>
    </>
  )
}
