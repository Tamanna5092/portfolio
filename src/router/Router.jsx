import {
  createBrowserRouter
} from "react-router-dom";
import Home from "../Page/Home";
import About from "../components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/about",
        element: <About></About>
      }
    ]
  },
]);

export default router
