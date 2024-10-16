import NetworkList from "../../components/NetworksList/NetworkList";
import TasksList from "../../components/TasksList/TasksList";
import "./TasksPage.css";
import coin from '../../assets/coin.png';

const TasksPage = () => {
  return (
    <div className="page tasks-page">
      <div className="blur1"></div>
      <div className="blur2"></div>
      {/* <div className="coin1">
        <img src={coin} alt="coin" />
      </div>
      <div className="coin2">
        <img src={coin} alt="coin" />
      </div> */}
      <div className="container">
        <h3 className="tasks-page__title">Social networks</h3>
        <p className="tasks-page__descr">
          join to our community for the latest news andupdates
        </p>
        <TasksList />
        <h3 className="tasks-page__title">tap jump networks</h3>
        <NetworkList />
      </div>
    </div>
  );
};

export default TasksPage;
