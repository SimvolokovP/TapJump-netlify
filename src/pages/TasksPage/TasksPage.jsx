import NetworkList from "../../components/NetworksList/NetworkList";
import TasksList from "../../components/TasksList/TasksList";
import "./TasksPage.css";
import coin1 from "../../assets/coin1.png";
import coin2 from "../../assets/coin2.png";
import { useCallback, useState } from "react";
import UsersService from "../../api/firebaseApi";
import { useTg } from "../../hooks/useTg";

const TasksPage = ({ data, setData }) => {
  const [isSubscribed, setIsSubscribed] = useState(null);
  const [isCheck, setIsCheck] = useState(false);
  const { openTelegramLink } = useTg();

  const handleCheckSubscription = useCallback(async () => {
    try {
      setIsCheck(true);
      const response = await fetch(
        `https://api.telegram.org/bot${
          import.meta.env.VITE_TG_TOKEN
        }/getChatMember?chat_id=${import.meta.env.VITE_CHAT_ID}&user_id=${
          data?.id
        }`
      );
      const dataResp = await response.json();

      if (dataResp.ok) {
        const status = dataResp.result.status;

        if (
          status === "member" ||
          status === "administrator" ||
          status === "creator"
        ) {
          setIsSubscribed(true);
          
          const updatedData = {
            ...data,
            isSub: true,
            score: data?.score + 10000,
          };
          setData(updatedData);
          await UsersService.getStatusSubs(updatedData);

          alert(`You are the ${status} of the channel. You get 10,000 coins`);
        } else {
          setIsSubscribed(false);
          alert("Sorry, you are not subscribed to our channel.");
          openTelegramLink(`https://t.me/${import.meta.env.VITE_CANAL_URL}`);
        }
        setIsCheck(false);
      } else {
        console.error(
          "Error fetching subscription status:",
          dataResp.description
        );
        alert("An error has occurred. Try again later");
        setIsSubscribed(false);
        setIsCheck(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error has occurred. Try again later");
      setIsSubscribed(false);
    }
  }, [data]);

  return (
    <div className="page tasks-page">
      <div className="blur1"></div>
      <div className="blur2"></div>
      <div className="coin1">
        <img src={coin1} alt="coin" />
      </div>
      <div className="coin2">
        <img src={coin2} alt="coin" />
      </div>
      <div className="container">
        <h3 className="tasks-page__title">Social networks</h3>
        <p className="tasks-page__descr">
          Join our community for the latest news and updates
        </p>
        {/* <button onClick={async () => await UsersService.resetAllSubStates()}>
          btn
        </button> */}
        {!data?.isSub && (
          <TasksList handleClick={handleCheckSubscription} isCheck={isCheck} />
        )}
        <h3 style={{ fontSize: "13px" }} className="tasks-page__title">
          Soon.....
        </h3>
        <NetworkList />
      </div>
    </div>
  );
};

export default TasksPage;
