import { useEffect, useState } from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import MobileBar from "./components/MobileBar/MobileBar";
import { useTg } from "./hooks/useTg";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import TasksPage from "./pages/TasksPage/TasksPage";
import GroupsPage from "./pages/GroupsPage/GroupsPage";
import WalletPage from "./pages/WalletPage/WalletPage";
import UsersService from "./api/firebaseApi";

function App() {
  const { tg } = useTg();
  const [fakeLoading, setFakeLoading] = useState(true);
  const { user, queryId } = useTg();
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchCurrentUser() {
      try {
        console.log(user);
        let u;
        if (user) {
          u = await UsersService.getUserById(user?.id);
        } else {
          u = await UsersService.getUserById(171718);
        }

        setData(u);
        setTimeout(() => {
          setFakeLoading(false);
          console.log("cu", u);
        }, 1500);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    }
    fetchCurrentUser();
  }, [user]);

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  return (
    <>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                fakeLoading={fakeLoading}
                setFakeLoading={setFakeLoading}
                data={data}
                user={user}
                setData={setData}
              />
            }
          />
          <Route
            path="/tasks"
            element={
              <TasksPage queryId={queryId} data={data} setData={setData} />
            }
          />
          <Route path="/groups" element={<GroupsPage userId={data?.id} />} />
          <Route path="/wallet" element={<WalletPage />} />
        </Routes>
        <div className="container">
          <MobileBar />
        </div>
      </main>
    </>
  );
}

export default App;
