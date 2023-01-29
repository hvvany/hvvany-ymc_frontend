import style from "./login.module.css";

function LoginInput(prob) {
  return (
    <div>
      <input className={style.inputBtn} type="text" placeholder={prob.content} />
    </div>
  );
}

export { LoginInput };
