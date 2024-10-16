import bigHero from "../../assets/big-hero.png";
import ytIcon from "../../assets/yt.png";
import instIcon from "../../assets/inst.png";
import tgIcon from "../../assets/tg.png";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={bigHero} alt="Gordon" />
      <h1 className="loading-screen__title">
        <span>tap</span> jump
      </h1>
      <div className="loading-screen__descr">
        join to our community for the latest news andupdates
      </div>
      <div className="loading-screen__links">
        <a href="#">
          <img src={ytIcon} alt="youtube" />
        </a>
        <a href="#">
          <img src={instIcon} alt="inst" />
        </a>
        <a href="#">
          <img src={tgIcon} alt="tg" />
        </a>
      </div>
    </div>
  );
};

export default LoadingScreen;
