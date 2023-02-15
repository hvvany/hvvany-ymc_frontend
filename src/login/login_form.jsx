import { CheckBtn } from "../common/button";
import style from "./login.module.css";
import sample from "../asset/images/home_logo.png";
import { LoginInput } from "./login_input";
import axios from 'axios';


function LoginPage(prob) {
  return (
    <div className={style.login_form}>
      <img className={style.login_form_img} src={sample} alt="" />
      <LoginInput className={style.pillBtn} content="ID" />
      <LoginInput content="Password" />
      <CheckBtn check="로그인" />
    </div>
  );
}

// export { LoginPage };