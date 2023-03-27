import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Counter from "../../features/counter/Counter";
import Home from "../../features/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "counter", element: <Counter /> },
    ],
  },
]);
