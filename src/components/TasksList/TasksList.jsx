import { tasksList } from "../../utils/utils";
import "./TasksList.css";
import { ClipLoader } from "react-spinners";

const TasksList = ({ handleClick, isCheck }) => {
  return (
    <ul className="list-reset tasks-list">
      {tasksList.map((task) => (
        <li className="task-item" key={task.text} onClick={handleClick}>
          {isCheck ? (
            <ClipLoader size={32} color="var(--text-color)" />
          ) : (
            task?.image
          )}
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
