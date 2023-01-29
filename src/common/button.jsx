import style from "../welcome/welcome.module.css";

function TagTypesExample(prob) {
  return <button className={style.pillBtn}>{prob.name}</button>;
}

function CheckBtn(prob) {
  return <button className={style.pillBtn2}>{prob.check}</button>;
}

export { CheckBtn, TagTypesExample };
