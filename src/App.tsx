import { Outlet } from "react-router-dom";
import "../public/index.css";
import Header from "./components/Header";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./thems/thems";
import { cls } from "./libs/utils";

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <>
      <div className={cls("", isDark ? "dark" : "")}>
        <div className="bg-white dark:bg-black dark:text-white">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
