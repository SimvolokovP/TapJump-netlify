import React, { useEffect, useState } from "react";
import ytIcon from "../../assets/yt.png";
import instIcon from "../../assets/inst.png";
import tgIcon from "../../assets/tg.png";
import "./LoadingScreen.css";
import exp1 from "../../assets/exp1.png";
import exp2 from "../../assets/exp2.png";

const LoadingScreen = () => {
  const [isDarkVisible, setIsDarkVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDarkVisible(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loading-screen">
      <div className="exp1">
        <img src={exp1} alt="" />
      </div>
      <div className="exp2">
        <img src={exp2} alt="" />
      </div>
      {isDarkVisible && <div className="loading-screen__dark"></div>}
      <h1 className="loading-screen__title">
        <span>tap</span> jumpers
      </h1>
      <div className="loading-screen__descr">
        join to our community for the latest news and updates
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
