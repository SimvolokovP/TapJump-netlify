import NetworkList from "../../components/NetworksList/NetworkList";
import TasksList from "../../components/TasksList/TasksList";
import "./TasksPage.css";
import coin1 from "../../assets/coin1.png";
import coin2 from "../../assets/coin2.png";
import { useCallback, useState } from "react";
import UsersService from "../../api/firebaseApi";

const TasksPage = ({ data, setData }) => {
  const [isSubscribed, setIsSubscribed] = useState(null);

  const handleCheckSubscription = useCallback(async () => {
    try {
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
        await UsersService.getStatusSubs(data);
        setIsSubscribed(
          status === "member" ||
            status === "administrator" ||
            status === "creator"
        );
        setData({ ...data, isSub: true, score: score + 10000 });
        alert(`Статус подписки: ${status}`);
      } else {
        console.error(
          "Error fetching subscription status:",
          dataResp.description
        );
        alert(
          "Произошла ошибка при получении статуса подписки. Вы не подписаны."
        );
        setIsSubscribed(false);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Произошла ошибка. Пожалуйста, попробуйте позже.");
      setIsSubscribed(false);
    }
  }, [data?.id]);

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
        <button onClick={async () => await UsersService.resetAllSubStates()}>
          btn
        </button>
        {!data?.isSub && <TasksList handleClick={handleCheckSubscription} />}
        <h3 style={{ fontSize: "13px" }} className="tasks-page__title">
          Soon.....
        </h3>
        <NetworkList />
      </div>
    </div>
  );
};

export default TasksPage;
