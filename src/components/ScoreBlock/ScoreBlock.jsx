import coin from "../../assets/coin.png";
import { useTg } from "../../hooks/useTg";
import "./ScoreBlock.css";

const ScoreBlock = ({ userData }) => {
  const { user } = useTg();

  return (
    <div className="score-block">
      <div className="score-block__account">
        <div>account:</div>
        <h3>{user ? user?.username : "-"}</h3>
      </div>
      <div className="score-block__score">
        <img src={coin} alt="coin" />
        <div>{userData?.score}</div>
      </div>
    </div>
  );
};

export default ScoreBlock;
