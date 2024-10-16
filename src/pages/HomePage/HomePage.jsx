import { useState, useEffect } from "react";
import FarmingBar from "../../components/FarmingBar/FarmingBar";
import MainButton from "../../components/MainButton/MainButton";
import MiniGamesMessage from "../../components/MiniGamesMessage/MiniGamesMessage";
import ScoreBlock from "../../components/ScoreBlock/ScoreBlock";
import Stats from "../../components/Stats/Stats";
import "./HomePage.css";
import UsersService from "../../api/firebaseApi";
import { useTg } from "../../hooks/useTg";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const HomePage = () => {
  const [fakeLoading, setFakeLoading] = useState(true);
  const { user } = useTg();
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        console.log(user);
        if (user) {
          const u = await UsersService.getUserById(user?.id);

          setData(u);
          setFakeLoading(false);
          console.log("cu", data);
        } else {
          const u = await UsersService.getUserById(171718);

          setData(u);
          setFakeLoading(false);
          console.log("cu", data);
        }
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }
    fetchCurrentUser();
  }, [user]);

  return (
    <div className="page home-page">
      {fakeLoading && <LoadingScreen />}
      <div className="container">
        {/* <Stats /> */}
        <div className="flex">
          <MainButton />
        </div>
        <ScoreBlock userData={data} />
        <MiniGamesMessage />
        <FarmingBar setUserData={setData} userData={data} />
      </div>
    </div>
  );
};

export default HomePage;
