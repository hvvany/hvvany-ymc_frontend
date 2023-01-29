import style from "./signup.module.css";
import { useState, useEffect } from "react";

function SignupInput(prob) {
    const [certification, setCertification] = useState("");
    useEffect(()=> {
        setCertification(prob.check);
    },[])
  return (
    <div>
      {certification ? (
        <div className={style.checkform}>
          <input
            className={style.inputBtn}
            type="text"
            placeholder={prob.content}
          />
          <button className={style.checkBtn}>{prob.check}</button>
        </div>
      ):  (
        <input
          className={style.inputBtn}
          type="text"
          placeholder={prob.content}
        />
      ) }
    </div>
  );
}

export { SignupInput };
