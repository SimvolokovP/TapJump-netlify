import { useState, useEffect } from "react";
import FarmingBar from "../../components/FarmingBar/FarmingBar";
import MainButton from "../../components/MainButton/MainButton";
import MiniGamesMessage from "../../components/MiniGamesMessage/MiniGamesMessage";
import ScoreBlock from "../../components/ScoreBlock/ScoreBlock";
import "./HomePage.css";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import coinGif from "../../assets/coinGif.gif";

const HomePage = ({ fakeLoading, setFakeLoading, user, data, setData }) => {
  return (
    <div className="page home-page">
      {fakeLoading && <LoadingScreen />}
      <div className="container">
        {/* <Stats /> */}
        <div className="score-block__account">
          <h3 className="home-page__title" style={{ textAlign: "start", margin: "0px", fontSize: "18px" }}>
            {user ? user?.username : "Not Found"}
          </h3>
        </div>
        <div className="flex">
          {/* <MainButton /> */}
          <img className="secret-hero" src={coinGif} alt="coin" />
        </div>
        <ScoreBlock userData={data} />
        <MiniGamesMessage />
        <FarmingBar setUserData={setData} userData={data} />
      </div>
    </div>
  );
};

export default HomePage;
