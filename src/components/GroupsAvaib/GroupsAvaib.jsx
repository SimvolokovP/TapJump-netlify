import gift from "../../assets/gift.png";
import referal from "../../assets/referal.png";

const GroupsAvaib = () => {
  return (
    <>
      <div className="groups-page__gift">
        <img src={gift} alt="gift" />
        <div className="groups-page__gift--text">
          <div>
            your gift: 1000 coins +1 . per mini-game and 15% of the friends
            earnings
          </div>
          <span>+ 1000 coins per invited friend</span>
        </div>
      </div>
      <div className="groups-page__referal">
        <div className="groups-page__gift--text">
          <div>your refferal link</div>
          <a href="#">soon</a>
        </div>
        <img src={referal} alt="referal" />
      </div>
    </>
  );
};
export default GroupsAvaib;
