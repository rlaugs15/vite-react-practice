import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Coins from "./screens/Coins";
import Coin from "./screens/Coin";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Coins />
            },
            {
                path: ':coinId',
                element: <Coin />
            }
        ]
    }
])

export default router