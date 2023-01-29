import style from "./nav.module.css";
import "./nav.module.css";
import { Link, Route } from "react-router-dom";
import { useState } from "react";

const NavBtn = () => {
  // 현재 선택된 아이콘을 관리하는 state
  const [activeNav, setActiveNav] = useState(1);
  return (
    <nav className={style.navbox}>
      {/* 하단 네비게이션 최상위 태그 */}
      <div>
        <Link to="/main" onClick={() => setActiveNav(1)}>
          <div className={activeNav === 1 ? "nav-item checked" : "nav-item"}>
            <i className="bi bi-house-door-fill"></i>
          </div>

          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </Link>
      </div>
      <div>
        <Link to="/" onClick={() => setActiveNav(2)}>
          <div className={activeNav === 2 ? "nav-item checked" : "nav-item"}>
            <i className="bi bi-geo-alt-fill"></i>
          </div>

          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </Link>
      </div>
      <div>
        <Link to="/community" onClick={() => setActiveNav(3)}>
          <div className={activeNav === 3 ? "nav-item checked" : "nav-item"}>
            <i className="bi bi-people-fill"></i>
          </div>

          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </Link>
      </div>
      <div>
        <Link to="/main" onClick={() => setActiveNav(4)}>
          <div className={activeNav === 4 ? "nav-item checked" : "nav-item"}>
            <i className="bi bi-chat-dots-fill"></i>
          </div>

          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </Link>
      </div>
      <div>
        <Link to="/main" onClick={() => setActiveNav(5)}>
          <div className={activeNav === 5 ? "nav-item checked" : "nav-item"}>
            <i className="bi bi-list"></i>
          </div>

          {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
        </Link>
      </div>
    </nav>
  );
};

export default NavBtn;

// function NavBtn() {
//   const menuArr = [
//     { name: "Tab1", content: "Tab menu ONE" },
//     { name: "Tab2", content: "Tab menu TWO" },
//     { name: "Tab3", content: "Tab menu THREE" },
//     { name: "Tab2", content: "Tab menu TWO" },
//     { name: "Tab3", content: "Tab menu THREE" },
//   ];

//   return (
//     <div className={style.navbox}>
//       <Link to="/main">
//         <i className="bi bi-house-fill" onClick={Radio}></i>
//       </Link>
//       <Link to="/">
//         <i className="bi bi-geo-alt-fill" onClick={Radio}></i>
//       </Link>
//       <Link to="/community">
//         <i className="bi bi-people-fill" onClick={Radio}></i>
//       </Link>
//       <Link to="/">
//         <i className="bi bi-chat-dots-fill" onClick={Radio}></i>
//       </Link>
//       <Link to="/">
//         <i className="bi bi-list" onClick={Radio}></i>
//       </Link>
//     </div>
//   );
// }

// function Radio(event) {
//   const setBtns = document.querySelectorAll(".bi");
//   console.log(setBtns);
//   setBtns.forEach((setBtn) => {
//     setBtn.addEventListener("click", () => {
//       event.preventDefault();
//       if (setBtn !== event.target) {
//         setBtn.target.classList.remove("checked");
//         event.target.classList.add("checked");
//       }
//     });
//   });
// }

// export default NavBtn;

// import React, { useState } from "react";

// function Home() {
//   const [active, setActive] = useState(false);
//   const handleClick = () => {
//     setActive(!active);
//   };

//   return (
//     <div className="center">
//       <button
//         onClick={handleClick}
//         style={{ backgroundColor: active ? "black" : "white" }}
//       >
//         SignUp
//       </button>
//     </div>
//   );
// }

// export default Home;
