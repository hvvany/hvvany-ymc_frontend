import SimpleSlider from "../slider/slider";
import style from "./main.module.css";
import NavBtn from "../common/nav";
import sample from "../asset/images/logo_2.png";
import axios from "axios";
import { useEffect, useState } from "react";

function MainPage() {
  const [storeList, setStoreList] = useState();
  const getFoods = async () => {
    const res = await axios({
      method: "get",
      url: "http://127.0.0.1:8000/foods/1/store",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    });
    setStoreList(res.data.results);
  };

  // .then(function (response) {

  //   // localStorage.setItem("access_token", response.data["access_token"]);
  //   // localStorage.setItem("refresh_token", response.data["refresh_token"]);
  //   // console.log(
  //   //   localStorage.getItem("access_token"),
  //   //   localStorage.getItem("refresh_token")
  //   // );
  //   // window.location.href = "http://127.0.0.1:3000/main";
  // });
  useEffect(() => {
    getFoods();
  }, []);

  return (
    <div className={style.main_page}>
      <img className={style} src={sample} alt="" />
      <h2>인기 매점</h2>
      <SimpleSlider className={style.store} stores={storeList} />
      <h2>뉴스 기사</h2>
      <SimpleSlider
        className={style.news}
        stores={storeList}
        dotscheck={true}
      />
      {/* <SimpleSlider /> */}
      <NavBtn basicPos={"home"} />
    </div>
  );
  // );
}

export { MainPage };
