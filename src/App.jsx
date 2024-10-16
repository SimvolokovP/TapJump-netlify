import { useEffect } from "react";
import AppRouter from "./components/AppRouter/AppRouter";
import MobileBar from "./components/MobileBar/MobileBar";
import { useTg } from "./hooks/useTg";

function App() {
  const { tg } = useTg();

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, []);

  return (
    <>
      <main>
        <AppRouter />
        <div className="container">
          <MobileBar />
        </div>
      </main>
    </>
  );
}

export default App;
