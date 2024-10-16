import mainBtn from "../../assets/main-btn.png";
import './MainButton.css';

const MainButton = () => {
  return (
    <button className="btn-reset main-btn">
      <img src={mainBtn} alt="main button" />
    </button>
  );
};

export default MainButton;
