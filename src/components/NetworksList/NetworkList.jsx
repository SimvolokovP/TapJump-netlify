import { networksList } from "../../utils/utils";

const NetworkList = () => {
  return (
    <ul className="list-reset tasks-list">
      {networksList.map((task) => (
        <li className="task-item" key={task.text}>
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

export default NetworkList;
