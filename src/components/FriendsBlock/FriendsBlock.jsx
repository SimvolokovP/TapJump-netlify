import refresh from "../../assets/refresh.png";
import "./FriendsBlock.css";
import empty from "../../assets/empty.png";
import { useState } from "react";
import message from '../../assets/message.png'

const FriendsBlock = () => {
  const [friends, setFriends] = useState([]);

  return (
    <div className="friends-block">
      <div className="friends-block__chapter">
        <div>
          <img src={refresh} alt="refresh" />
          your friends list
        </div>
        <button className="btn-reset common-btn">claim</button>
      </div>
      <div className="friends-block__list">
        {friends.length === 0 && (
          <>
            <img src={empty} alt="empty" />
            <div>the list of friends is empty</div>
            <span>
              invite freinds and recieve bonuses through the referral program!
            </span>
          </>
        )}
      </div>
      <button className="btn-reset accent-btn accent-btn__friends">
        <img src={message} alt="message" />
        send link</button>
    </div>
  );
};

export default FriendsBlock;
