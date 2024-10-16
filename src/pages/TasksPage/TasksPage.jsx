import NetworkList from "../../components/NetworksList/NetworkList";
import TasksList from "../../components/TasksList/TasksList";
import "./TasksPage.css";
import coin1 from "../../assets/coin1.png";
import coin2 from "../../assets/coin2.png";
import { useCallback, useState } from "react";

const TasksPage = ({ id, queryId }) => {
  const [isSubscribed, setIsSubscribed] = useState(null);

  const handleCheckSubscription = useCallback(async () => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${
          import.meta.env.VITE_TG_TOKEN
        }/getChatMember?chat_id=${import.meta.env.VITE_CHAT_ID}&user_id=${id}`
      );
      const data = await response.json();

      if (data.ok) {
        const status = data.result.status;
        setIsSubscribed(
          status === "member" ||
            status === "administrator" ||
            status === "creator"
        );

        // Вывод статуса в всплывающем окне
        alert(`Статус подписки: ${status}`);
      } else {
        console.error("Error fetching subscription status:", data.description);
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
  }, [id]);

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
        <TasksList handleClick={handleCheckSubscription} />
        <h3 style={{ fontSize: "13px" }} className="tasks-page__title">
          Soon.....
        </h3>
        <NetworkList />
      </div>
    </div>
  );
};

export default TasksPage;
