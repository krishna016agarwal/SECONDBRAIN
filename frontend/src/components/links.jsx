import React from "react";
import style from "./link.module.css";
import { useState, useEffect } from "react";
import { LuFacebook } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { PiTelegramLogo } from "react-icons/pi";
import { FaQuora } from "react-icons/fa6";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { CiGlobe } from "react-icons/ci";
import { BiLogoPinterestAlt } from "react-icons/bi";
import Sidebar from "./sidebar";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";
import { IoLogoReddit } from "react-icons/io5";
import { useDataContext } from "./context";
export default function Links() {
  //------------------------------------
  const { addToHome } = useDataContext();

  //-------------------

  const toastOptions = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const [state, setstate] = useState({
    title: "",
  });
  const handleChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { title } = state;
    addToHome({ title });
    setstate({ title: "" });
    toast.success("Links successfully added", toastOptions);
    // const { data } = await axios.post("http://localhost:8000/api/links", {
    //   title,
    //   question,
    // });
    // if (data.status === false) {
    //   toast.error(data.message, toastOptions);
    // }
    // if (data.status === true) {
    //   setstate({ title: "", question: "" });
    //   toast.success("Question is successfully added", toastOptions);
    // }
  };
  return (
    <>
      <div className={style.container3}>
        <div className={style.main}>
          <div className={style.scrollContainer}>
            <h1>Links</h1>
            <div className={style.section}>
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className={style.box4}>
                  <LuFacebook
                    style={{ color: "white", height: "25px", width: "45px" }}
                  />
                  <h2>Facebook</h2>
                </div>
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
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className={style.box4}>
                  <FaInstagram
                    style={{ color: "white", height: "25px", width: "45px" }}
                  />
                  <h2>Instagram</h2>
                </div>
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
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className={style.box4}>
                  <FiLinkedin
                    style={{ color: "white", height: "25px", width: "45px" }}
                  />
                  <h2>LinkedIn</h2>
                </div>
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
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className={style.box4}>
                  <FiYoutube
                    style={{ color: "white", height: "25px", width: "45px" }}
                  />
                  <h2>Youtube</h2>
                </div>
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
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className={style.box4}>
                  <FaQuora
                    style={{ color: "white", height: "25px", width: "45px" }}
                  />
                  <h2>Quora</h2>
                </div>
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
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className={style.box4}>
                  <IoLogoReddit
                    style={{ color: "white", height: "25px", width: "45px" }}
                  />
                  <h2>Reddit</h2>
                </div>
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
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className={style.box4}>
                  <PiTelegramLogo
                    style={{ color: "white", height: "25px", width: "45px" }}
                  />
                  <h2>Telegram</h2>
                </div>
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
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className={style.box4}>
                  <BiLogoPinterestAlt
                    style={{ color: "white", height: "25px", width: "45px" }}
                  />
                  <h2>Pinterest</h2>
                </div>
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
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className={style.box4}>
                  <CiGlobe
                    style={{ color: "white", height: "25px", width: "45px" }}
                  />
                  <h2>Other Website</h2>
                </div>
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
        </div>

        <Sidebar isactivate2={"links"}></Sidebar>
      </div>
    </>
  );
}
