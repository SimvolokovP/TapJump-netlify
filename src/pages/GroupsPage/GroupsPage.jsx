import "./GroupsPage.css";
import FriendsBlock from "../../components/FriendsBlock/FriendsBlock";
import GroupsAvaib from "../../components/GroupsAvaib/GroupsAvaib";
import { useState } from "react";

const GroupsPage = ({ userId }) => {
  const handleShareClick = () => {
    const inviteLink = `https://t.me/TapJumpers_bot?startapp`;
    const shareText = ``;
    const fullUrl = `https://t.me/share/url?url=${encodeURIComponent(
      inviteLink
    )}&text=${encodeURIComponent(shareText)}`;
    window.open(fullUrl);
  };
  
  const referalShareClick = () => {
    const inviteLink = `https://t.me/TapJumpers_bot?start=${userId}`;
    const shareText = ``;
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
        <GroupsAvaib handleClick={referalShareClick} />
        <FriendsBlock handleClick={handleShareClick} />
      </div>
    </div>
  );
};

export default GroupsPage;
