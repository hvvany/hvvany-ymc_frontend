import style from "./signup.module.css";
import { useState } from "react";

function SignupRadio(prob) {
  function sendTeamChoice(event) {
    const team = event.target.id;
    prob.getTeamChoice(team);
  }
  return (
    <div className={style.RadioBox}>
      <input
        className={style.inputBtn}
        type="radio"
        placeholder={prob.content}
        name="choice"
        id="1"
        onClick={sendTeamChoice}
      />
      <label htmlFor="1">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JzOo5drFPL-xxChIOWvmibCM9wIs48q4VQ&usqp=CAU"
          alt=""
        />
      </label>
      <input
        className={style.inputBtn}
        type="radio"
        placeholder={prob.content}
        name="choice"
        id="2"
        onClick={sendTeamChoice}
      />
      <label htmlFor="2">
        <img
          src="https://upload.wikimedia.org/wikipedia/ko/5/56/%EB%A1%AF%EB%8D%B0_%EC%9E%90%EC%9D%B4%EC%96%B8%EC%B8%A0_%ED%8C%80_%EB%A1%9C%EA%B3%A0.png"
          alt=""
        />
      </label>
      <input
        className={style.inputBtn}
        type="radio"
        placeholder={prob.content}
        name="choice"
        id="3"
        onClick={sendTeamChoice}
      />
      <label htmlFor="3">
        <img
          src="https://w.namu.la/s/ec253f07307f3d4fcd9515eb2658685c34d6ce6b47655053cf4a391aca6964fc150f3a63af51b8957cffc3096bbc306100f755ca23cbdab77331661314d262031c6ac15eea46cd65688a837914a99b83ac80e7dc29c3973f3686f64bf44e1959"
          alt=""
        />
      </label>
      <input
        className={style.inputBtn}
        type="radio"
        placeholder={prob.content}
        name="choice"
        id="4"
        onClick={sendTeamChoice}
      />
      <label htmlFor="4">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </label>
      <input
        className={style.inputBtn}
        type="radio"
        placeholder={prob.content}
        name="choice"
        id="5"
        onClick={sendTeamChoice}
      />
      <label htmlFor="5">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
      </label>
      <input
        className={style.inputBtn}
        type="radio"
        placeholder={prob.content}
        name="choice"
        id="6"
        onClick={sendTeamChoice}
      />
      <label htmlFor="6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JzOo5drFPL-xxChIOWvmibCM9wIs48q4VQ&usqp=CAU"
          alt=""
        />
      </label>
      <input
        className={style.inputBtn}
        type="radio"
        placeholder={prob.content}
        name="choice"
        id="7"
        onClick={sendTeamChoice}
      />
      <label htmlFor="7">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JzOo5drFPL-xxChIOWvmibCM9wIs48q4VQ&usqp=CAU"
          alt=""
        />
      </label>
      <input
        className={style.inputBtn}
        type="radio"
        placeholder={prob.content}
        name="choice"
        id="8"
        onClick={sendTeamChoice}
      />
      <label htmlFor="8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JzOo5drFPL-xxChIOWvmibCM9wIs48q4VQ&usqp=CAU"
          alt=""
        />
      </label>
      <input
        className={style.inputBtn}
        type="radio"
        placeholder={prob.content}
        name="choice"
        id="9"
        onClick={sendTeamChoice}
      />
      <label htmlFor="9">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JzOo5drFPL-xxChIOWvmibCM9wIs48q4VQ&usqp=CAU"
          alt=""
        />
      </label>
      <input
        className={style.inputBtn}
        type="radio"
        placeholder={prob.content}
        name="choice"
        id="10"
        onClick={sendTeamChoice}
      />
      <label htmlFor="10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6JzOo5drFPL-xxChIOWvmibCM9wIs48q4VQ&usqp=CAU"
          alt=""
        />
      </label>
    </div>
  );
}

export { SignupRadio };
