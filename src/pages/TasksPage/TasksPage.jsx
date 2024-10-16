import NetworkList from "../../components/NetworksList/NetworkList";
import TasksList from "../../components/TasksList/TasksList";
import "./TasksPage.css";
import coin1 from "../../assets/coin1.png";
import coin2 from "../../assets/coin2.png";
import { path } from "../../utils/utils";
import { useCallback } from "react";

const TasksPage = ({ id, queryId }) => {
  const handleCheckSubscription = useCallback(async () => {
    console.log("click");
    try {
      console.log("start", id, queryId);
      const response = await fetch(`${path}/check-subscription`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, queryId }),
      });

      const data = await response.json();
      if (data.isSub) {
        alert("You are a subscriber!");
      } else {
        alert("You need to subscribe to the channel.");
      }
    } catch (error) {
      console.error("Error checking subscription:", error);
      alert("There was an error checking your subscription status.");
    }
  }, [id, queryId]);

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
          join to our community for the latest news andupdates
        </p>
        <TasksList />
        <button onClick={() => handleCheckSubscription()}>taskButton</button>
        <h3 style={{ fontSize: "13px" }} className="tasks-page__title">
          soon.....
        </h3>
        <NetworkList />
      </div>
    </div>
  );
};

export default TasksPage;
