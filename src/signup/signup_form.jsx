import { SignupRadio } from "./signup_radio";
import style from "./signup.module.css";
import { useState } from "react";
import axios from "axios";

function SignupPage() {
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [userpassword1, setUserPassword1] = useState("");
  const [userpassword2, setUserPassword2] = useState("");
  const [teamChoice, setTeamChoice] = useState(0);
  const handleUserName = (event) => {
    console.log("함수 작동함?????");
    setUserName(event.target.value);
  };
  function handleUserEmail(event) {
    console.log("함수 작동함??123123???");
    setUserEmail(event.target.value);
  }
  function handleUserPassword1(event) {
    console.log("함수 작동함?????111");
    setUserPassword1(event.target.value);
  }
  function handleUserPassword2(event) {
    console.log("함수 작동함????3333?");
    setUserPassword2(event.target.value);
  }
  const SignUpPost = async () => {
    console.log(
      "테스트",
      useremail,
      userpassword1,
      userpassword2,
      teamChoice,
      username
    );
    axios
      .post(
        "http://127.0.0.1:8000/accounts/registration",
        {
          nickname: username,
          email: useremail,
          password1: userpassword1,
          password2: userpassword2,
          team: teamChoice,
          // team
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then(function (response) {
        console.log(response.data);
        localStorage.setItem("access_token", response.data["access_token"]);
        localStorage.setItem("refresh_token", response.data["refresh_token"]);
        console.log(
          localStorage.getItem("access_token"),
          localStorage.getItem("refresh_token")
        );
        window.location.href = "http://127.0.0.1:3000/main";
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className={style.signup_form}>
      <h3 className={style.title}>회원가입</h3>

      {/* 이름 */}
      <div className={style.checkform}>
        <input
          className={style.inputBtn}
          type="text"
          placeholder="이름"
          onChange={handleUserName}
        />
      </div>

      {/* 이메일 */}
      <div className={style.checkform}>
        <input
          className={style.inputBtn}
          type="text"
          placeholder="이메일"
          onChange={handleUserEmail}
        />
        <button className={style.checkBtn}>"인증"</button>
      </div>

      {/* 비밀번호 */}
      <div className={style.checkform}>
        <input
          className={style.inputBtn}
          type="text"
          placeholder="비밀번호"
          onChange={handleUserPassword1}
        />
      </div>

      {/* 비밀번호 확인 */}
      <div className={style.checkform}>
        <input
          className={style.inputBtn}
          type="text"
          placeholder="비밀번호 확인"
          onChange={handleUserPassword2}
        />
      </div>

      <SignupRadio getTeamChoice={setTeamChoice} />
      <button onClick={SignUpPost} className={style.pillBtn}>
        가입 하기
      </button>
    </div>
  );
}
export { SignupPage };

// function LoginPage() {
//   const [useremail, setUserEmail] = useState("");
//   const [userpassword, setUserPassword] = useState("");

//   function handleUseremail(event) {
//     setUserEmail(event.target.value);
//   }

//   function handleUserPassword(event) {
//     setUserPassword(event.target.value);
//   }

//   const LoginPost = async () => {
//     console.log(useremail, userpassword);
//     axios
//       .post(
//         "http://127.0.0.1:8000/accounts/login/",
//         {
//           email: useremail,
//           password: userpassword,
//         },
//         {
//           "Content-Type": "application/json",
//         }
//       )
//       .then(function (response) {
//         console.log(response.data);
//         localStorage.setItem("access_token", response.data["access_token"]);
//         localStorage.setItem("refresh_token", response.data["refresh_token"]);
//         console.log(
//           localStorage.getItem("access_token"),
//           localStorage.getItem("refresh_token")
//         );
//         window.location.href = "http://127.0.0.1:3000/main";
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   return (
//     <div className={style.login_form}>
//       <img className={style.login_form_img} src={sample} alt="" />
//       <input
//         id={useremail}
//         name={useremail}
//        onChange={ () => handleUseremail}
//         placeholder="이메일"
//         className={style.inputBtn}
//       ></input>
//       <input
//         id={userpassword}
//         name={userpassword}
//         type="password"
//         onChange={handleUserPassword}
//         placeholder="비밀번호"
//         className={style.inputBtn}
//       ></input>
//       {/* button을 클릭하면 API를 다시 불러와줍니다. */}
//       <button onClick={LoginPost} className={style.pillBtn}>
//         로그인 하기
//       </button>
//     </div>
//   );
// }

// export { LoginPage };
