import tonIcon from "../../assets/ton.png";
import ticketsIcon from "../../assets/ticket.png";

import "./Stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <div className="stats__item stats__item--big">
        <div>1 429 323</div>
        <span>players</span>
      </div>
      <div className="stats__item stats__item--small">
        <img src={tonIcon} alt="ton" />
        <span>00</span>
      </div>
      <div className="stats__item stats__item--small">
        <img src={ticketsIcon} alt="tickets" />
        <span>00</span>
      </div>
    </div>
  );
};

export default Stats;
