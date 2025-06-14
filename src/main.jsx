
import "./index.css";
import { createRoot } from "react-dom/client";
import router from "./router/route.jsx";
import { RouterProvider } from "react-router-dom";

const root = document.getElementById("root");



//make view render categories
createRoot(root).render(<RouterProvider router={router}/>);
