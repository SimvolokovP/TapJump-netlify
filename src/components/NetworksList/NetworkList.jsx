import { networksList } from "../../utils/utils";
import './NetworkList.css';

const NetworkList = () => {
  return (
    <ul className="list-reset networks-list">
      {networksList.map((task, id) => (
        <li className="network-item" key={task.text + id}>
          {task?.image}
          <div className="network-item__text">
            <div>{task.text}</div>
            <span>{task.coins} coins</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NetworkList;
