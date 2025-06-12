import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");

//make view render categories
createRoot(root).render(App());
