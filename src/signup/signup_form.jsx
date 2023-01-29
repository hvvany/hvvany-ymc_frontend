import { SignupInput } from "./signup_input";
import { SignupRadio } from "./signup_radio";
import { CheckBtn } from "../common/button";
import style from "./signup.module.css";

function SignupPage() {
  return (
    <div className={style.signup_form}>
      <h3 className={style.title}>회원가입</h3>
      <SignupInput content="이름" />
      <SignupInput content="이메일" check="인증" />
      <SignupInput content="비밀번호" />
      <SignupInput content="비밀번호 확인" />
      <SignupRadio />
      <CheckBtn check="가입하기" />
    </div>
  );
}

export { SignupPage };
