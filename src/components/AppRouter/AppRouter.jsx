import { Route, Routes } from "react-router-dom";
import { appRoutes } from "../../router/router";

const AppRouter = () => {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
          index={route.isIndex}
        ></Route>
      ))}
    </Routes>
  );
};

export default AppRouter;
