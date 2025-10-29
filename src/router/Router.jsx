import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Career from "../components/Career";
import Project from "../components/Project";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "skills",
        element: <Skills></Skills>,
      },
      {
        path: "career",
        element: <Career></Career>,
      },
      {
        path: "project",
        element: <Project></Project>,
      },
    ],
  },
]);

export default router;
