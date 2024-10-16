import "./ScoreBlock.css";

const ScoreBlock = ({ userData }) => {
  return (
    <div className="score-block">
      <div className="score-block__score">
        <div>{userData?.score}</div>
      </div>
    </div>
  );
};

export default ScoreBlock;
