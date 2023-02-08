import React from "react";
import ReactDOM from "react-dom/client";
import WelcomePage from "./welcome/welcome_form";
import { LoginPage } from "./login/login_form";
import { SignupPage } from "./signup/signup_form";
import { MainPage } from "./main/main";
import NavBtn from "./common/nav";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<WelcomePage name="로그인" check="회원가입" />}
        ></Route>
        <Route
          path="/login"
          element={<LoginPage name="로그인" check="회원가입" />}
        ></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        {/* <Route path="/main" element={<NavBtn />}></Route> */}
        <Route path="/main" element={<MainPage />}></Route>
        <Route path="/community" element={<NavBtn />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
