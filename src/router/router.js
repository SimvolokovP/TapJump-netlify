import GroupsPage from "../pages/GroupsPage/GroupsPage";
import HomePage from "../pages/HomePage/HomePage";
import TasksPage from "../pages/TasksPage/TasksPage";
import WalletPage from "../pages/WalletPage/WalletPage";

export const appRoutes = [
  { path: "/", isIndex: true, component: HomePage },
  { path: "/tasks", isIndex: false, component: TasksPage },
  { path: "/groups", isIndex: false, component: GroupsPage },
  { path: "/wallet", isIndex: false, component: WalletPage },
];
