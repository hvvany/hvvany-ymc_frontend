import GroupBtn from "../common/button_group";
import style from "./welcome.module.css";
import sample from "../asset/images/home_logo.png";

function WelcomePage(prob) {
  return (
    <div className={style.welcome_form}>
      <img className={style.welcome_form_img} src={sample} alt="" />
      <GroupBtn name={prob.name} check={prob.check} />
    </div>
  );
}

export default WelcomePage;
