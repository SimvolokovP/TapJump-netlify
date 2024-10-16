import "./GroupsPage.css";
import FriendsBlock from "../../components/FriendsBlock/FriendsBlock";
import GroupsAvaib from "../../components/GroupsAvaib/GroupsAvaib";
import { useState } from "react";

const GroupsPage = ({ userId }) => {
  const INVITE_URL = "Tapjumpers";
  const handleShareClick = () => {
    const inviteLink = `https://t.me/${INVITE_URL}?startapp`;
    const shareText = `Join me on this awesome Telegram group!`;
    const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(
      inviteLink
    )}&text=${encodeURIComponent(shareText)}`;
    window.open(fullUrl);
  };

  return (
    <div className="page groups-page">
      <div className="blur1"></div>
      <div className="blur3"></div>
      <div className="blur4"></div>
      <div className="container">
        <h3 className="groups-page__title">create your community</h3>
        <p className="groups-page__descr">
          invite your friends and get more coins through the referral program!
        </p>
        <GroupsAvaib />
        <FriendsBlock handleClick={handleShareClick} />
      </div>
    </div>
  );
};

export default GroupsPage;
