import GroupBtn from "../common/button_group";
import style from "./login.module.css";
import sample from "../asset/images/home_logo.png";

function LoginPage(prob) {
  return (
    <div className={style.login_form}>
      <img className={style.login_form_img} src={sample} alt="" />
      <GroupBtn name={prob.name} check={prob.check} />
    </div>
  );
}

export default LoginPage;
