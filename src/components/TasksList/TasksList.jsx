import { tasksList } from "../../utils/utils";
import "./TasksList.css";

const TasksList = ({ handleClick }) => {
  return (
    <ul className="list-reset tasks-list">
      {tasksList.map((task) => (
        <li className="task-item" key={task.text} onClick={handleClick}>
          {task?.image}
          <div className="task-item__text">
            <div>{task.text}</div>
            <span>{task.coins} coins</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
