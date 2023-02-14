import SimpleSlider from "../slider/slider";
import style from "./main.module.css";
import NavBtn from "../common/nav";

function MainPage() {
  return (
    <div className={style.main_page}>
      <h2>인기 매점</h2>
      <SimpleSlider className={style.store} />
      <h2>뉴스 기사</h2>
      <SimpleSlider />
      <NavBtn />
    </div>
  );
}

export { MainPage };
