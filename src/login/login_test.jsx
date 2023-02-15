import React, { useState } from "react";
import axios from "axios";
import style from "./login.module.css";
import sample from "../asset/images/home_logo.png";

function LoginPage() {
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");

  function handleUseremail(event) {
    setUserEmail(event.target.value);
  }

  function handleUserPassword(event) {
    setUserPassword(event.target.value);
  }

  const LoginPost = async () => {
    console.log(useremail, userpassword);
    axios
      .post(
        "http://127.0.0.1:8000/accounts/login/",
        {
          email: useremail,
          password: userpassword,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("access_token", response.data["access_token"]);
        localStorage.setItem("refresh_token", response.data["refresh_token"]);
        console.log(
          localStorage.getItem("access_token"),
          localStorage.getItem("refresh_token")
        );
        window.location.href = "http://127.0.0.1:3000/main";
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className={style.login_form}>
      <img className={style.login_form_img} src={sample} alt="" />
      <input
        id={useremail}
        name={useremail}
        onChange={handleUseremail}
        placeholder="이메일"
        className={style.inputBtn}
      ></input>
      <input
        id={userpassword}
        name={userpassword}
        type="password"
        onChange={handleUserPassword}
        placeholder="비밀번호"
        className={style.inputBtn}
      ></input>
      {/* button을 클릭하면 API를 다시 불러와줍니다. */}
      <button onClick={LoginPost} className={style.pillBtn}>
        로그인 하기
      </button>
    </div>
  );
}
export { LoginPage };
