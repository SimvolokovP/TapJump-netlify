import { useState, useEffect } from "react";
import FarmingBar from "../../components/FarmingBar/FarmingBar";
import MainButton from "../../components/MainButton/MainButton";
import MiniGamesMessage from "../../components/MiniGamesMessage/MiniGamesMessage";
import ScoreBlock from "../../components/ScoreBlock/ScoreBlock";
import "./HomePage.css";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import coinGif from "../../assets/coinGif.gif";
import avatarImage from "../../assets/avatar.png";
import UsersService from "../../api/firebaseApi";

const HomePage = ({ fakeLoading, setFakeLoading, user, data, setData }) => {
  const truncatedUsername =
    user && user.username.length > 9
      ? user.username.slice(0, 12) + "..."
      : user?.username || "Not Found";

  return (
    <div className="page home-page">
      {fakeLoading && <LoadingScreen />}
      <div className="container home-page__container">
        {/* <Stats /> */}
        <div className="score-block__account">
          <h3
            className="home-page__title"
            style={{
              textAlign: "start",
              margin: "0px",
              fontSize: "13px",
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <img style={{ width: "56px" }} src={avatarImage} alt="avatar" />
            {truncatedUsername}
          </h3>
        </div>
        <div>
          <div className="flex">
            {/* <MainButton /> */}
            <img className="secret-hero" src={coinGif} alt="coin" />
          </div>
          <ScoreBlock userData={data} />
        </div>
        <div>
          <MiniGamesMessage />
          <FarmingBar setUserData={setData} userData={data} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
