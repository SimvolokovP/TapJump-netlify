import "./GroupsPage.css";
import FriendsBlock from "../../components/FriendsBlock/FriendsBlock";
import GroupsAvaib from "../../components/GroupsAvaib/GroupsAvaib";

const GroupsPage = () => {
  const shareLink = "https://t.me/druzhbany";
  const message = `Check out this group! ${shareLink}`; 

  const handleShareClick = () => {
    const url = `tg://msg_url?url=${encodeURIComponent(shareLink)}&text=${encodeURIComponent(message)}`;
    window.open(url);
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
