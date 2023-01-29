import { TagTypesExample, CheckBtn } from "./button";
import { Link, Route } from "react-router-dom";
import style from "../welcome/welcome.module.css";
import { LoginPage } from "../login/login_form";

function GroupBtn(prob) {
  return (
    <div className={style.btnGroup}>
      <Link to="/login">
        <TagTypesExample name={prob.name} />
      </Link>
      <Link to="/signup">
        <CheckBtn check={prob.check} />
      </Link>
    </div>
  );
}

export default GroupBtn;
