import coin from "../../assets/coin.png";
import { useTg } from "../../hooks/useTg";
import "./ScoreBlock.css";

const ScoreBlock = ({ userData }) => {

  return (
    <div className="score-block">
      <div className="score-block__score">
        <img src={coin} alt="coin" />
        <div>{userData?.score}</div>
      </div>
    </div>
  );
};

export default ScoreBlock;
