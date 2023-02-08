import SimpleSlider from "../slider/slider";
import style from "./main.module.css";
import NavBtn from "../common/nav";

function MainPage() {
  return (
    <div className={style.main_page}>
      <SimpleSlider />
      <NavBtn />
    </div>
  );
}

export { MainPage };
