import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Coins from "./screens/Coins";
import Coin from "./screens/Coin";
import Chart from "./components/Chart";
import Price from "./components/price";
import ToDoList from "./screens/toDoList";
import Dnd from "./screens/Dnd";
import Ani from "./screens/Ani";
import Movies from "./screens/Movies";
import MovieApp from "./MovieApp";
import Search from "./screens/Search";
import MovieDetail from "./movieComponents/MovieDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: "todoList",
        element: <ToDoList />,
      },
      {
        path: "dnd",
        element: <Dnd />,
      },
      {
        path: "ani",
        element: <Ani />,
      },
      {
        path: "movies",
        element: <MovieApp />,
        children: [
          {
            path: "",
            element: <Movies />,
            children: [
              {
                path: ":movieId",
                element: <MovieDetail />,
              },
            ],
          },
          {
            path: "search",
            element: <Search />,
            children: [
              {
                path: ":movieId",
                element: <MovieDetail />,
              },
            ],
          },
        ],
      },
      {
        path: ":coinId",
        element: <Coin />,
        children: [
          {
            path: "chart",
            element: <Chart />,
          },
          {
            path: "price",
            element: <Price />,
          },
        ],
      },
    ],
  },
]);

export default router;
