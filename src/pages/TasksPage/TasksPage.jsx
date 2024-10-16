import NetworkList from "../../components/NetworksList/NetworkList";
import TasksList from "../../components/TasksList/TasksList";
import "./TasksPage.css";
import coin1 from "../../assets/coin1.png";
import coin2 from "../../assets/coin2.png";

const TasksPage = () => {
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
        <h3 style={{ fontSize: "13px" }} className="tasks-page__title">
          soon.....
        </h3>
        <NetworkList />
      </div>
    </div>
  );
};

export default TasksPage;
