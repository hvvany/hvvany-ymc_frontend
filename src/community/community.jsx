import style from "./community.module.css";
import NavBtn from "../common/nav";
import sample from "../asset/images/home_logo.png";

function CommunityPage() {
  return (
    <div className={style.main_page}>
      <img className={style} src={sample} alt="" />
      <h2>인기 매점</h2>
      <h2>뉴스 기사</h2>
      <NavBtn basicPos={"community"} />
    </div>
  );
}

export default CommunityPage;
