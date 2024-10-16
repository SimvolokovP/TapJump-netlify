import { useState, useEffect } from "react";
import coin from "../../assets/coin.png";
import "./FarmingBar.css";
import UsersService from "../../api/firebaseApi";
import { Timestamp } from "firebase/firestore";

const FarmingBar = ({ userData, setUserData }) => {
  const [farmScore, setFarmScore] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [farmingDone, setFarmingDone] = useState(false);

  const updateScore = async () => {
    const newScore = userData.score + (100 - farmScore) * 10;
    const roundedScore = Math.round(newScore / 1000) * 1000;

    await UsersService.addUserScore(userData);
    setUserData({
      ...userData,
      score: roundedScore,
      isFarm: false,
      farmEnd: null,
    });
    setFarmingDone(false);
  };

  const startFarm = async () => {
    const currentTime = Timestamp.now();
    const time = new Timestamp(
      currentTime.seconds + 43200,
      currentTime.nanoseconds
    );

    if (!userData.isFarm) {
      await UsersService.updateFarmState(userData, time);
      setUserData({ ...userData, isFarm: true, farmEnd: time });
    }
    console.log(time);
  };

  useEffect(() => {
    const updateFarmScore = () => {
      if (userData.isFarm && userData.farmEnd) {
        const currentTime = Timestamp.now();
        const remainingTime = userData.farmEnd.seconds - currentTime.seconds;

        if (remainingTime > 0) {
          const score = ((remainingTime / 43200) * 100).toFixed(3);
          setFarmScore(score);
        } else {
          clearInterval(intervalId);
          setFarmingDone(true);
        }
      }
    };

    const id = setInterval(updateFarmScore, 1000);
    setIntervalId(id);

    return () => clearInterval(id);
  }, [userData.isFarm, userData.farmEnd, setUserData]);

  return (
    <div
      className="farming-bar"
      onClick={farmingDone ? updateScore : startFarm}
    >
      {!userData?.isFarm ? (
        <div>Start Farm</div>
      ) : (
        <>
          <div
            style={{
              width: `${100 - farmScore}%`,
              maxWidth: "100%",
            }}
            className="farming-bar__progress"
          ></div>
          <div className="farming-bar__inner">
            <div>{farmingDone ? "Claim" : "Farming"}</div>
            <div>
              <img src={coin} alt="coin" />
              {((100 - farmScore) * 10).toFixed(3)}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FarmingBar;
